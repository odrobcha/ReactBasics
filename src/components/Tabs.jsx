const Tabs = ({children, buttons, buttonsContainer}) =>{  //buttons - custom name for extra slot
    const ButtonContainer = buttonsContainer;   //this constant has to Capitalized in order to use it as dynamic HTML element

    return(
        <>
            <ButtonContainer>
                {buttons}
            </ButtonContainer>
            {children}

        </>
    )
};

export default Tabs;
