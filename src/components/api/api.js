const API = {};

 

API.getLanguageInfo = async query => {
 
  const accessKey = '33505b7acd732000eadb050d5e692700';
   query = 'hello';  

  const response = await fetch(`http://apilayer.net/api/detect?access_key=${accessKey}&query=${query}`);
  if (response.status != 200)
    throw `Server api error reponse.status=${response.status}`;
  const result = await response.json();
  return result;
};

export default API;
