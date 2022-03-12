function getAdmin(map){
  let admins =[]; 
  for([key, value] of map){
    if(value === 'Estagiario'){
      admins.push(key);
    }
  }
  return admins;
}
const usuarios = new Map();
usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natalia', 'Estagiario');
usuarios.set('Marcos', 'Estagiario');
usuarios.set('Fernado', 'Estagiario');
usuarios.set('Claudio', 'Estagiario');

console.log(getAdmin(usuarios));

