const Tabs = ({children, buttons, ButtonsContainer}) =>{  //buttons - custom name for extra slot
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
