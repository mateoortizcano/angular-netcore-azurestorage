# NOTAS

1. Las dependencias que usa la librería deben instalarse directamente en la librería (las dependencias queden en el package json de la librería)
2. Los módulos a usar dentro de la librería deben importarse en el módulo de la librería propiamente sino no van a ser visibles para su uso.
3. el módulo angular/core, angular/common y angular/platform-browser deben ponerse dentro de las denpendencias del pachage.json ya que puede que donde se utilice la librería estas no se importen.
4. si la librería se usará dentro de otro proyecto angular poner en el tsconfig.app.json del proyecto que usará la librería lo siguiente:
	"paths": {
      "@angular/*": [
        "./node_modules/@angular/*"
      ]
    }