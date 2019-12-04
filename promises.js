const posts = [
    {title:'Post One', body: 'This is post one'},
    {title:'Post Two', body: 'This is post two'},
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{

            output += `<li>${post.title} </li>`;

        });
        document.body.innerHTML = output;

    }, 1000)
}


function createPost(post, callback){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error)
            {
                resolve();
            }
            else
            {
                reject('Error something went wrong');
            }
        }, 2000)

    });

   
}

async function init(){
    await createPost({title:'Post One', body: 'This is post one'});
    getPosts();
}

init();

// Aysnc/ Await and / fetch


async function fetchusers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);

}

fetchusers();

/*
createPost( {title:'Post Three', body: 'This is post three'}).then(getPosts).catch((err)=>{
    console.log(err);
});
*/


/** promise all */
const Promise1 = Promise.resolve('Hello World!');
const Promise2 = 10;
const Promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve, 2000, 'Good Bye');
});
const Promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

Promise.all([Promise1, Promise2, Promise3, Promise4]).then((values)=>{

    console.log(values);
});