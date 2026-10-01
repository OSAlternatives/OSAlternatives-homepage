document.body.style.display=none;
function GenerateHtmlFrom(file.name,file.type)
{
    if(!fetch(file.name))
    {
        console.log(file.name"does not exist");
    }
    else if(file.size>1024*1024)
    {
        console.log("file exceeds size limit");
    }
    else if(file.type!=SupportedFileTypes)
    {
        console.log("File type invalid or unsupported") 
    else
    {//load and parse file
        //TODO:implement loading and parsing files
    }
}
