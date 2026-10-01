document.body.style.display=none;
function ParseMd(file.name)
{
    for();//Note This function will be defined in future
}
function GenerateHtmlFrom(const FileName=file.name,const FileType=file.type)
{
    if(!fetch(FileName))
    {
        console.log(FileName"does not exist");
    }
    else if(file.size>1024*1024)
    {
        console.log("file exceeds size limit");
    }
    else if(FileType!=SupportedFileTypes)
    {
        console.log("File type invalid or unsupported") 
    else
    {//load and parse file
        if(FileType==md)
        {
            ParseMd(Filename);
        }
    }
}
