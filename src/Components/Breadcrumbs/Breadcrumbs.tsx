import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

interface Props {
  phoneId?: string;
  device: string;
}

export const Breadcrumbs: React.FC<Props> = ({ phoneId, device }) => {
  const capitalisedStr = device.charAt(0).toUpperCase() + device.slice(1);

  return (
    <div className="breadcrumbs__url">
      <Link to="/" className="breadcrumbs__homelink">
        <img className="breadcrumbs__url-icon invert" src="img/Home.png" />
      </Link>

      <div className="breadcrumbs__vector">
        <img src="img/Chevron(ArrowRight).png" alt="vector" />
      </div>

      <Link to={`/${device}`} className="breadcrumbs__segment">
        {capitalisedStr}
      </Link>

      {phoneId && (
        <div className="breadcrumbs__vector">
          <img src="img/Chevron(ArrowRight).png" alt="vector" />
        </div>
      )}

      <p className="breadcrumbs__phoneId">{phoneId}</p>
    </div>
  );
};
