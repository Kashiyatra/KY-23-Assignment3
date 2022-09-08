import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../styles/Layout'

const WhyCASection = () => {
   return (
      <ChartStyled  id='whyca'>
         <InnerLayout>
            <div data-aos='fade-down-right'>
               <h3 className="small-heading">
                  WHY <span>CA?</span>
               </h3>
               <p className="c-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
               <p className="c-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

            </div>
         </InnerLayout>
      </ChartStyled >
   )
}
const ChartStyled = styled.section`
   .chart-con{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      @media screen and (max-width: 1347px){
            grid-template-columns: repeat(1, 1fr);
      }
      .chart-left{
         width: 80%;
         @media screen and (max-width: 1347px){
            width: 100%;
         }

         .stats{
            img{
               box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
               border-radius: 62px;
               width: 100%;
            }
            .stats-money{
               display: flex;
               padding-bottom: 1.3rem;
               justify-content: space-between;
            }
         }
      }
      .chart-right{
         padding-left: 2rem;
         p{
            padding: 1.3rem 0;
         }
      }
   }
`

export default WhyCASection;
