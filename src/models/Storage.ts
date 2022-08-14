export const storage = {
    setLocalStorageItem: (key: string, value: any) =>{
        localStorage.setItem(key, JSON.stringify(value));
    },
    getLocalStorageItem: (key: string) =>{
      const item =  localStorage.getItem(key);

      if(item){
        return JSON.parse(item);
      }
    },
}