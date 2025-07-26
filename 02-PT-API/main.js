const userID = 2;

  try {
    
    const [userRes, postsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userID}`),
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userID}`)
    ]);

    
    if (!userRes.ok)  throw new Error(`Usuario con ID ${userID} no encontrado`);
    if (!postsRes.ok) throw new Error(`Posts del usuario ${userID} no encontrados`);

    
    const user  = await userRes.json();
    const posts = await postsRes.json();

    
    console.log(`Posts de ${user.name}:`);
    posts.forEach(post => {
      console.log(`${post.id} – ${post.title}`);
    });

  } catch (err) {
    console.error(err.message);
  }