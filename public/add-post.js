async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const post_content = document.querySelector('textarea[name="post-content"]').value.trim();
    console.log(title, post_content)

    if (title && post_content) {

        await fetch(`/api/post`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload()
    }

    // if (response.ok) {
    //     document.location.replace('/dashboard');
    // } else {
    //     alert(response.statusText);
    // }
}

document.querySelector('.new-post-form').addEventListener('click', newFormHandler);