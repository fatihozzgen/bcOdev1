
const writeToScreen = (data = []) => {
  const postContainer = document.querySelector('.posts');
  const filterInput = document.querySelector('.filter-input');

  filterInput.addEventListener('input', searchFilter)

  function searchFilter(e) {
    let elements ='';
    const result =  data.filter(item => item.title.includes(e.target.value)) 
    console.log(result)

    if(result.length>0){
     
      result.forEach((item) => {

        elements += `<div class="post">         
        <img src=${item.thumbnailUrl} />
            <button class="remove"  > X </button>
          <div class="caption">
            <span class="title"> ${item.title} </span>
          </div>
        </div>`;
      });
      
  }else{
      elements =`<div class="no-item"> No Item Found </div>`;
  }

  postContainer.innerHTML = elements;
  

  function registerClickHandler(e) {
    let target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
  
  var removeBtn = document.querySelectorAll('.remove');
  
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", registerClickHandler, false);
  }

  }

  
  let elements = '';
  data.forEach(post => {
   
    elements += `<div class="post">   
                        <img src=${post.thumbnailUrl} />
                            <button class="remove"  > X </button>
                          <div class="caption">
                            <span class="title"> ${post.title} </span>
                          </div>
                  </div>`;
    })
  postContainer.innerHTML = elements;

  function registerClickHandler(e) {
    let target = e.target;
    target.parentNode.parentNode.removeChild(target.parentNode);
  }
  
  var removeBtn = document.querySelectorAll('.remove');
  
  for (let i = 0; i < removeBtn.length; i++) {
    removeBtn[i].addEventListener("click", registerClickHandler, false);
  }
  
};




const getPosts = async () => {
  
  try {
    
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50');
    console.log(res);
    if (res.status === 200) {
      writeToScreen(res.data);
    }
   
  } catch (error) {
    console.log(error);
  }

  
};



getPosts();
