interface Suscriptor {
  recibirNotificacion(video: string): void;
}

class CanalYouTube {
  private suscriptores: Suscriptor[] = [];

  // Método para suscribirse (campanita)
  suscribir(s: Suscriptor) { this.suscriptores.push(s); }

  // Método para avisar a todos
  publicarVideo(titulo: string) {
    console.log(`Subiendo video: ${titulo}`);
    this.suscriptores.forEach(s => s.recibirNotificacion(titulo));
  }
}

class Usuario implements Suscriptor {
  constructor(private nombre: string) {}
  
  recibirNotificacion(video: string) {
    console.log(`Hola ${this.nombre}, ¡nuevo video de: ${video}!`);
  }
}

// Uso:
const midudev = new CanalYouTube();
const pepe = new Usuario("Pepe");
const ana = new Usuario("Ana");

midudev.suscribir(pepe);
midudev.suscribir(ana);

midudev.publicarVideo("Curso de TypeScript");
// Pepe y Ana reciben el aviso automáticamente.