using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiStorage.Entities
{
    public class Archivo
    {
        public int id { get; set; }
        public string Nombre { get; set; }
        public string fechaModificacion { get; set; }
        public string url { get; set; }
        public string extension { get; set; }
    }
}
