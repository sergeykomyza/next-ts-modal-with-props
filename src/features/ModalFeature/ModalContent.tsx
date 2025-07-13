export const ModalContent = () => {
  console.log(
      typeof window === 'undefined' 
        ? 'Rendered on server' 
        : 'Rendered on client'
    )
  return (
    <>
      <h2>SEO-Friendly заголовок</h2>
      <p>
        Это текст, который будет доступен в HTML при SSR. Поисковики его увидят.
      </p>
    </>
  )
}