var mapTable;

function unicode2ascii(strText, map)
{	
	//alert(strText);
	var chUnicode;
	var chAscii;
	var index;
	var lenChar;
	var bRepham=0;
	var ascii_text="";
	mapTable=JSON.parse(karthika);
	//alert(mapTable.map["ണ്ട"]);
	for(index=0; index< strText.length;)
	{
	
		
		for(lenChar=3;lenChar>0;lenChar--)
		{			
			chUnicode=strText.substring(index,index+lenChar);
		//alert (chUnicode);
			if(mapTable.map[chUnicode])
			{
				chAscii=mapTable.map[chUnicode];				
				if(chUnicode == "ൈ")
				{
					if(bRepham==1)
					{
						bRepham=0;
						ascii_text=ascii_text.substring(0,ascii_text.length-2)+chAscii+ascii_text[ascii_text.length-2] +ascii_text[ascii_text.length-1];
					}
					else{
						ascii_text=ascii_text.substring(0,ascii_text.length-1)+chAscii+ascii_text[ascii_text.length-1];
					}
					
					
				}else if((chUnicode == "ോ") || (chUnicode == "ൊ") || (chUnicode == "ൌ")){
					if(bRepham==1)
					{
						bRepham=0;
						ascii_text = ascii_text.substring(0,ascii_text.length-2) + chAscii[0] +ascii_text[ascii_text.length-2]+ ascii_text[ascii_text.length-1] + chAscii[1];
					}
					else{
					//alert (chUnicode);
					//alert ("char0:"+chAscii[0]+" middlechar:"+ascii_text[ascii_text.length-1]+ " char1:"+chAscii[1]);
						ascii_text = ascii_text.substring(0,ascii_text.length-1) + chAscii[0] + ascii_text[ascii_text.length-1] + chAscii[1];
					//alert ("ascii_text(ഒ ഓ ഒ ഔ): "+ascii_text);						
					}
					
				}
				else if(chUnicode == "്യേ" ||chUnicode == "്യെ" ){
				//alert (chUnicode);
					bRepham=0;
				//alert ("starting char:"+ascii_text[ascii_text.length-2]+"char0:"+chAscii[0]+" middlechar:"+ascii_text[ascii_text.length-1]+ " char1:"+chAscii[1]);
					ascii_text = ascii_text.substring(0,ascii_text.length-1) + chAscii[0] + ascii_text[ascii_text.length-1] + chAscii[1];
				//alert ("ascii_text(യേ യെ): "+ascii_text);
				}
				else if ((chUnicode == "െ") || (chUnicode == "േ") ||(chUnicode == "്ര")){
				//alert (chUnicode);
					
					//alert(" middlechar:"+ascii_text[ascii_text.length-2]+ " char1:"+chAscii[1]);
					if(bRepham==1)
					{
						ascii_text = ascii_text.substring(0,ascii_text.length-2)+ chAscii[0] + ascii_text[ascii_text.length-2] + ascii_text[ascii_text.length-1];
						bRepham=0;
					}else
					{
						ascii_text = ascii_text.substring(0,ascii_text.length-1)+ chAscii[0] + ascii_text[ascii_text.length-1];
					//alert ("ascii_text (എ, ഏ, റ): "+ascii_text);
					}
					if(chUnicode == "്ര")
					{
						bRepham=1;
					}
				}
				else
				{
				//alert (chUnicode);
					bRepham=0;
					ascii_text=ascii_text+chAscii;
				//alert ("ascii_text (none): "+ascii_text);
				}
				index=index+lenChar;
				break;
			}
			else
			{
				
				if(lenChar==1)
				{
					
					ascii_text = ascii_text + chUnicode;
					index++;
					bRepham=0;
				}
				//alert(ascii_text);
			}
		}
		//console.log(ascii_text);
	}
	return ascii_text;
}


