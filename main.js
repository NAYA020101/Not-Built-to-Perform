// 1. 点击主标题 → 展开/收起菜单
const introTitle = document.querySelector('.intro-title')
const menuList = document.querySelector('.menu-list')

introTitle.addEventListener('click', () => {
  menuList.classList.toggle('show')
})

// 2. 自动生成全屏星光动画
const starLayer = document.querySelector('.home-star-layer')
// 生成60个星光，不卡屏、效果柔和
for(let i = 0; i < 60; i++){
  const star = document.createElement('div')
  star.classList.add('home-star')
  // 随机星光大小
  const size = Math.random() * 2.5 + 1.5
  star.style.width = `${size}px`
  star.style.height = `${size}px`
  // 随机位置
  star.style.left = `${Math.random() * 100}%`
  star.style.top = `${Math.random() * 100}%`
  // 随机闪烁延迟，更自然
  star.style.animationDelay = `${Math.random() * 3}s`
  starLayer.appendChild(star)
}