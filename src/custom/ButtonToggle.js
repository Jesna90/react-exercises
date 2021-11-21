import useToggle from './UseToggle'


const ButtonToggle = props => {

    const [isShopNameChanged, setIsShopNameChanged] = useToggle();

    return (
        <div>
            <div className={props.parentClasses}>
                <button onClick={() => setIsShopNameChanged(isShopNameChanged)} className={props.classes}>
                    Toggle shop name
                </button>
            </div>
            <div>
                <h2 className={props.h2classes}>{isShopNameChanged ? 'Shop 1' : 'Shop 2'}</h2>
            </div>
        </div>
    )
}
export default ButtonToggle;