/* 
=> Composição: arte de construir uma classe */

class Reader{
    ToRead(caminho){
        return "Conteúdo do arquivo"
    }
}

class Writer{
    ToWrite(arquivo, conteudo){
        console.log("Conteúdo escrito");
    }
}

class Creater{
    ToCreate(name){
        console.log("Arquivo criado!");
    }
}

class Deleter{
    ToDelete(name){
        console.log("Deletando arquivo!");
    }
}

class ArchiveManipulator{
    constructor(name){
        this.archive = name;
        this.reader = new Reader();
        this.writer = new Writer();
        this.creater = new Creater();
        this.deleter = new Deleter();
    }
}

class UsersManage{
    constructor(){
        this.creater = new Creater();
        this.writer = new Writer();
    }

    SaveUsersList(list){
        this.creater.ToCreate("users.txt");
        this.writer.ToWrite("users.txt", list)
    }
}

var manipulator = new ArchiveManipulator("myarchive.txt");

manipulator.reader.ToRead();
manipulator.writer.ToWrite();

var users = new UsersManage();

users.SaveUsersList(["helen", "miriam"]);