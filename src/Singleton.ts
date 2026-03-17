class MandoTele {
  private static instancia: MandoTele;
  public volumen: number = 10;

  // 1. Constructor privado: nadie puede hacer "new MandoTele()"
  private constructor() {}

  // 2. Método para obtener la única instancia
  public static obtenerMando(): MandoTele {
    if (!MandoTele.instancia) {
      MandoTele.instancia = new MandoTele();
    }
    return MandoTele.instancia;
  }
}

// Uso:
const mandoDeJuan = MandoTele.obtenerMando();
const mandoDeMaria = MandoTele.obtenerMando();

mandoDeJuan.volumen = 25; 

console.log(mandoDeMaria.volumen); // Imprime 25, ¡porque es el MISMO mando!
console.log(mandoDeJuan === mandoDeMaria); // true