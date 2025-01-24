import anime from "animejs"

const img = document.createElement('img')
document.body.append(img)

const urlObj = new URL('./media/1a05824c-ab21-43a0-b3c6-989b72d619d4.jpeg', import.meta.url)

img.src = urlObj.href

console.log(urlObj)
console.log(import.meta.url)

anime({
    targets: img,
    rotate : 360,
    duration: 5000,
    loop: true
})