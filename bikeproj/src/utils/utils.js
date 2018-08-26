export default {
    fromatDate(time){
        if(!time)return "";
        let date = new Date(time);
        //update xiugai
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    }
}