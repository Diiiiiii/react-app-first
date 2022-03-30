export function getRendomElement(array) {
   if (!Array.isArray(array)){
       return undefined;
   }

   return array[Math.floor(Math.random() * array.length)];
}

const module = {
    getRendomElement,
};

export default module;