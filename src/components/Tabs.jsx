const Tabs = ({children, buttons, ButtonsContainer = 'menu'}) =>{  //buttons - custom name for extra slot // set default value
 //   const ButtonsContainer = buttonsContainer;   //this constant has to Capitalized in order to use it as dynamic HTML element

    return(
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}

        </>
    )
};

export default Tabs;
