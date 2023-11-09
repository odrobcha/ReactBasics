const Tabs = ({children, buttons}) =>{  //buttons - custom name for extra slot
    return(
        <>
            <menu>
                {buttons}
            </menu>
            {children}

        </>
    )
};

export default Tabs;
