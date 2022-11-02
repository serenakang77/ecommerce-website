
const NavBar = ({setProduct}) => {

  const handleChangeType = (event) => {
    return setProduct(event.target.value)
  }

  return (
    <nav>
      <form action='' autoComplete="on">
        <fieldset>
          <input
            type='radio'
            id='allProduct'
            name='type'
            value='placeholder'
            onClick={handleChangeType}
          />
          <label htmlFor='allProduct'>View All</label>
          <input
            type='radio'
            id='blush'
            name='type'
            value='blush'
            onClick={handleChangeType}
          />
          <label htmlFor='blush'>Blush</label>
          <input
            type='radio'
            id='bronzer'
            name='type'
            value='bronzer'
            onClick={handleChangeType}
          />
          <label htmlFor='bronzer'>Bronzer</label>
          <input
            type='radio'
            id='eyebrow'
            name='type'
            value='eyebrow'
            onClick={handleChangeType}
          />
          <label htmlFor='eyebrow'>Eyebrow</label>
          <input
            type='radio'
            id='eyeliner'
            name='type'
            value='eyeliner'
            onClick={handleChangeType}
          />
          <label htmlFor='eyeliner'>Eyeliner</label>
          <input
            type='radio'
            id='Eyeshadow'
            name='type'
            value='eyeshadow'
            onClick={handleChangeType}
          />
          <label htmlFor='Eyeshadow'>Eyeshadow</label>
          <input
            type='radio'
            id='foundation'
            name='type'
            value='foundation'
            onClick={handleChangeType}
          />
          <label htmlFor='foundation'>Foundation</label>
          <input
            type='radio'
            id='lipstick'
            name='type'
            value='lipstick'
            onClick={handleChangeType}
          />
          <label htmlFor='lipstick'>Lipstick</label>
          <input
            type='radio'
            id='Mascara'
            name='type'
            value='mascara'
            onClick={handleChangeType}
          />
          <label htmlFor='Mascara'>Mascara</label>
        </fieldset>
      </form>
    </nav>
  )
}

export default NavBar
