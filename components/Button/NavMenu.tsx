import { Fragment } from "react"

export default function NavMenu({ menuOpen, toggleMenu, lightTheme }) {
  const styling = 'transition duration-1000 ease-in-out h-6 md:h-10 w-6 md:w-10'
  return !menuOpen ? <Fragment>
    {
      lightTheme ? 
        <svg className={styling} onClick={()=> toggleMenu(!menuOpen)} viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15.2308H25V18H0V15.2308ZM0 5.53846H25V12.4615H0V5.53846ZM0 0H25V2.76923H0V0Z" fill="#222222"/>
        </svg> : 
        <svg className={styling} onClick={()=> toggleMenu(!menuOpen)} viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15.2308H25V18H0V15.2308ZM0 5.53846H25V12.4615H0V5.53846ZM0 0H25V2.76923H0V0Z" fill="white"/>
        </svg>
    }
    </Fragment> : <Fragment>
      {
        lightTheme ? 
          <svg className={styling} onClick={()=> toggleMenu(!menuOpen)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.00102 10.6298L13.1796 15.6197C13.6992 16.1242 14.0372 16.1293 14.5662 15.6197L15.6052 14.6183C16.1142 14.128 16.1487 13.8061 15.6052 13.2824L10.1226 8.0002L15.6057 2.71802C16.1192 2.22157 16.1292 1.88652 15.6057 1.3816L14.5667 0.380688C14.0277 -0.138825 13.6947 -0.114825 13.1801 0.380688L8.00102 5.37064L2.82239 0.381158C2.30788 -0.114355 1.97487 -0.138354 1.43586 0.381158L0.396834 1.38207C-0.127179 1.88699 -0.117678 2.22204 0.396834 2.71849L5.87947 8.0002L0.396834 13.2824C-0.146679 13.8061 -0.117678 14.128 0.396834 14.6183L1.43536 15.6197C1.95987 16.1293 2.29788 16.1242 2.82189 15.6197L8.00102 10.6298Z" fill="#222222"/>
          </svg> : (
            <svg className={styling} onClick={()=> toggleMenu(!menuOpen)} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8.00102 10.6298L13.1796 15.6197C13.6992 16.1242 14.0372 16.1293 14.5662 15.6197L15.6052 14.6183C16.1142 14.128 16.1487 13.8061 15.6052 13.2824L10.1226 8.0002L15.6057 2.71802C16.1192 2.22157 16.1292 1.88652 15.6057 1.3816L14.5667 0.380688C14.0277 -0.138825 13.6947 -0.114825 13.1801 0.380688L8.00102 5.37064L2.82239 0.381158C2.30788 -0.114355 1.97487 -0.138354 1.43586 0.381158L0.396834 1.38207C-0.127179 1.88699 -0.117678 2.22204 0.396834 2.71849L5.87947 8.0002L0.396834 13.2824C-0.146679 13.8061 -0.117678 14.128 0.396834 14.6183L1.43536 15.6197C1.95987 16.1293 2.29788 16.1242 2.82189 15.6197L8.00102 10.6298Z" fill="white"/>
          </svg> 
          )
      }
    </Fragment>
}