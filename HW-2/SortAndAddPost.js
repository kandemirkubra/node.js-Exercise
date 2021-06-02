/*
Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

-Postları dizin içerisinde bulunan nesneler şeklinde oluşturalım.

-Post nesnesi şablonu {title: 'Post Başlık 1', detail: 'Post Detay 1'} olarak düşünülebilir.

-Promise ve Async - Await yöntemleri ile ayrı ayrı yapalım.
*/

const posts = [
    { title: 'Post Başlık 1', detail: 'Post Detay 1' },
    { title: 'Post Başlık 2', detail: 'Post Detay 2' },
    { title: 'Post Başlık 3', detail: 'Post Detay 3' },
    { title: 'Post Başlık 4', detail: 'Post Detay 4' },
];

const listposts = () => {
    posts.map((post) => {
        console.log(post.title);
    });
}

const addPost = (newPost) => {
    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);

        resolve(posts);
        //reject('BIR HATA ALINDI');
    });
    return promise1;
}

/* //synchron çalışma
addPost({ title: 'Post Başlık 10', detail: 'Post Detay 10' })
    .then(() => {
        console.log('-YENI LISTE-');
        listposts();
    }).catch((error) => {
        console.error(error);
    })
 */


//async-await çalışması
async function showPost(){
    try{
        await addPost({ title: 'Post Başlık 20', detail: 'Post Detay 20' });
        listposts();
    }catch(error){
        console.error(error);
    }
}
showPost();