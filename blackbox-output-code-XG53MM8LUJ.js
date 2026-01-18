let wishListCount = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        wishListCount++;
        alert(`Added to wish list! Total items: ${wishListCount}`);
    });
});