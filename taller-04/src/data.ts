export interface Usuario {
  codigo: string;
  nombre: string;
  apellido: string;
  hobbies: string[];
}

export let usuarios: Usuario[] = [
  {
    codigo: "1001",
    nombre: "Ana",
    apellido: "Lopez",
    hobbies: ["leer", "bailar"],
  },
  {
    codigo: "1002",
    nombre: "Luis",
    apellido: "Martinez",
    hobbies: ["correr", "leer", "nadar"],
  },
];
