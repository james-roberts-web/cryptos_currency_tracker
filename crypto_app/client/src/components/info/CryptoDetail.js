import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'



const CryptoDetail = (props) => {
  if (!props.currency) return null;
  const arrowIndicator = (props.currency.price_change_percentage_1h_in_currency > 0) ? <FontAwesomeIcon icon={faArrowUp} /> : <FontAwesomeIcon icon={faArrowDown} />
  return (
    <div className="details">
    { arrowIndicator }
    <img src={props.currency.image} alt = "currency logo"></img>
      <h3>{ props.currency.name } </h3>
      <h4>{props.currency.symbol}</h4>
      <table>
        <tr>
          <td>
            Current Price:
          </td>
          <td>
            £{props.currency.current_price}
          </td>
        </tr>
        <tr>
          <td>
            Highest value in last 24 hours:
          </td>
          <td>
            £{props.currency.high_24h}
          </td>
        </tr>
        <tr>
          <td>
            Lowest value in last 24 hours:
          </td>
          <td>
            £{props.currency.low_24h}
          </td>
        </tr>
        <tr>
          <td>
            Percent change in last 24 hours:
          </td>
          <td>
            {props.currency.price_change_percentage_24h.toPrecision(4)}%
          </td>
        </tr>
        <tr>
          <td>
            Percent change in last hour:
          </td>
          <td>
            {props.currency.price_change_percentage_1h_in_currency.toPrecision(4)}%
          </td>
        </tr>
        <tr>
          <td>
            Market cap:
          </td>
          <td>
            £{props.currency.market_cap}
          </td>
        </tr>
        <tr>
          <td>
            Total Supply:
          </td>
          <td>
            £{props.currency.total_supply}
          </td>
        </tr>
        <tr>
          <td>
            Total Volume:
          </td>
          <td>
            £{props.currency.total_volume}
          </td>
        </tr>
      </table>

    </div>
  )
}

export default CryptoDetail;
