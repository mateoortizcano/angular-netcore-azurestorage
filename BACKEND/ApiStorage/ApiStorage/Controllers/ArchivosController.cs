using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;
using ApiStorage.Configuration;
using ApiStorage.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ApiStorage.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArchivosController : ControllerBase
    {

        private readonly IOptions<MyConfig> config;

        public ArchivosController(IOptions<MyConfig> config)
        {
            this.config = config;
        }

        // GET: api/<ArchivosController>
        [HttpGet]
        public async Task<List<Archivo>> ListFiles(string directorio)
        {
            List<Archivo> blobs = new List<Archivo>();
            try
            {
                if(CloudStorageAccount.TryParse(config.Value.StorageConnection, out CloudStorageAccount storageAccount))
                {
                    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
                    CloudBlobContainer blobContainer = blobClient.GetContainerReference(config.Value.Container);
                    BlobResultSegment resultSegment = await blobContainer.ListBlobsSegmentedAsync(directorio, null);
                    int id = 0;
                    foreach ( IListBlobItem item in resultSegment.Results)
                    {                        
                        Archivo archivo = new Archivo();
                        if (item.GetType() == typeof(CloudBlockBlob))
                        {
                            CloudBlockBlob blob = (CloudBlockBlob)item;
                            string[] NombreConRuta = blob.Name.Split('/');
                            archivo.Nombre = NombreConRuta[NombreConRuta.Length - 1];
                            archivo.fechaModificacion = blob.Properties.LastModified.ToString();
                            archivo.id = id++;
                            archivo.url = blob.Uri.ToString();
                            string[] NombreYExtension = archivo.Nombre.Split('.');
                            archivo.extension = NombreYExtension[NombreYExtension.Length - 1];

                        }
                        else if (item.GetType() == typeof(CloudBlobDirectory))
                        {
                            CloudBlobDirectory blob = (CloudBlobDirectory)item;
                            string[] NombreConRuta = blob.Prefix.Split('/');
                            archivo.Nombre = NombreConRuta[NombreConRuta.Length - 2];
                            archivo.fechaModificacion = "";
                            archivo.id = id++;
                            archivo.url = blob.Uri.ToString();
                            archivo.extension = "dir";
                        }                        
                        blobs.Add(archivo);
                    }    
                }
            }
            catch
            {

            }
            return blobs;
        }
    }
}
