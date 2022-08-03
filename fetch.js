const writeToScreen = (data = []) => {
    const postContainer = document.querySelector('.posts');

    let elements = '';
    data.forEach(post => {
     
      elements += `<div class="post">
                        <img  src=${post.thumbnailUrl}z
      
                        <div class="remove-card">
                            <button class="remove"  > X </button>
                        </div> 
                  </div> `;
    })
    
    postContainer.innerHTML = elements;

    function registerClickHandler(e) {
        var target = e.target;
        target.parentNode.parentNode.removeChild(target.parentNode);
    }

    var removeBtn = document.querySelectorAll('.remove');

    for (var i = 0; i < removeBtn.length; i++) {
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