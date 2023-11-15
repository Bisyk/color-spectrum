import MainIcon from '../ui/icons/MainIcon'
import CheckOkIcon from '../ui/icons/CheckOkIcon'
import CheckNotIcon from '../ui/icons/CheckNotIcon'

export const CardsSection = ({ primaryColor, secondaryColor, contrastRatio }) => {
  const contrastRatioForSmallTextIsGood = contrasrRatio => contrasrRatio >= 4.5
  const contrastRatioForLargeTextIsGood = contrasrRatio => contrasrRatio >= 3
  return (
    <div className="cardswrapper">
          <div className="card__wrapper card_one__wrapper">
            <div className="card card_one" style={{
              backgroundColor:primaryColor,
            }}>
              <MainIcon color={secondaryColor}/>
              <h2 style={{color: secondaryColor}}>Let the beauty of what you love be what you do.</h2>
              <span className='contrasrRatio'
                    style={{backgroundColor: secondaryColor,
                            color: primaryColor}}>{contrastRatio}</span>
            </div>
            <div className="checkinfo">
              <div className='chekinfo__wrapper'>
                <p>{contrastRatioForLargeTextIsGood(contrastRatio)
                    ? <CheckOkIcon/> 
                    : <CheckNotIcon/>}<span className='checktext'>Icons & Large Text</span></p>
                <p>{contrastRatioForSmallTextIsGood(contrastRatio) 
                    ? <CheckOkIcon/> 
                    : <CheckNotIcon/>}<span className='checktext'>Small text</span></p>
              </div>
            </div>
          </div>
          <div className="card__wrapper card_two__wrapper">
            <div className="card card_two" style={{
              backgroundColor: secondaryColor,
            }}>
              <MainIcon color={primaryColor}/>
              <h2 style={{color: primaryColor}}>Let the beauty of what you love be what you do.</h2>
              <span className='contrasrRatio'
                    style={{backgroundColor: primaryColor,
                            color: secondaryColor}}>{contrastRatio}</span>
            </div>
            <div className="checkinfo checkinfo__dark">
              <div className='chekinfo__wrapper'>
                <p>{contrastRatioForLargeTextIsGood(contrastRatio)
                    ? <CheckOkIcon/> 
                    : <CheckNotIcon/>}<span className='checktext'>Icons & Large Text</span></p>
                <p>{contrastRatioForSmallTextIsGood(contrastRatio) 
                    ? <CheckOkIcon/> 
                    : <CheckNotIcon/>}<span className='checktext'>Small text</span></p>
              </div>
            </div>
          </div>
        </div>
  )
}