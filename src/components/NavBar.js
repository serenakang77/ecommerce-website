
const NavBar = ({setProduct}) => {

  // Whenever user clicks the product type, change that type to be selected value
  const handleChangeType = (event) => {
    return setProduct(event.target.value)
  }

  const formArray = [
    { id: 'allProduct', value: 'placeholder', label: 'View All' },
    { id: 'blush', value: 'blush', label: 'Blush' },
    { id: 'bronzer', value: 'bronzer', label: 'Bronzer' },
    { id: 'eyebrow', value: 'eyebrow', label: 'Eyebrow' },
    { id: 'eyeliner', value: 'eyeliner', label: 'Eyeliner' },
    { id: 'eyeshadow', value: 'eyeshadow', label: 'Eyeshadow' },
    { id: 'foundation', value: 'foundation', label: 'Foundation' },
    { id: 'lipstick', value: 'lipstick', label: 'Lipstick' },
    { id: 'mascara', value: 'mascara', label: 'Mascara' },
  ]

  return (
    <nav>
      <form action='' autoComplete="on">
        <fieldset>
          {
            formArray.map(individual => {
              return (
                <>
                  <input
                    type='radio'
                    id={individual.id}
                    name='type'
                    value={individual.value}
                    onClick={handleChangeType}
                  />
                  <label htmlFor={individual.id}>{individual.label}</label>
                </>
              )
            })
          }
        </fieldset>
      </form>
    </nav>
  )
}

export default NavBar
