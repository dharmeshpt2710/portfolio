import { useEffect } from 'react'

export function useScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const targets = document.querySelectorAll(
      '.skill-card, .project-card, .contact-card, .stat-tile'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => {
      // Stagger delay based on position within its grid parent
      const siblings = Array.from(el.parentElement.children)
      const index = siblings.indexOf(el)
      el.style.transitionDelay = `${index * 80}ms`
      el.classList.add('will-animate')
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])
}
