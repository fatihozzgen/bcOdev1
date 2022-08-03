const writeToScreen = (data = []) => {
  const postContainer = document.querySelector('.posts');

  

  let elements = '';
  data.forEach(post => {
   
    elements += `<div class="post">
                        
      
                        
                        <img src=${post.thumbnailUrl} />
                            <button class="remove"  > X </button>
                            <span> ${post.title} </span>
                        </div> 
                  `;
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

function removeNode() {
  const myDiv = document.querySelector('.post');
  const parent = myDiv.parentNode;
  parent.removeChild(myDiv);
  console.log('kalktı')
}

getPosts();