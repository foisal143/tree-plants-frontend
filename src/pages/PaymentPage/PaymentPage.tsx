import { Elements } from '@stripe/react-stripe-js';
import Container from '../../components/Container';
import HeadingText from '../../components/HeadingText';
import CheckOutForm from '../../components/ChecoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useParams } from 'react-router-dom';
import './PaymentPage.css';
const PaymentPage = () => {
  const { price } = useParams();
  const priceNum = parseFloat(price as string);
  const stripePromise = loadStripe(
    'pk_test_51OaW7SA36EHsCe9dKWgajsjH1lrsZ0a07POTljAYtkgaJD4SP1u6Gxr7QeeU67kD88gdAksRjp1GJzoI1oUKAfOl00bfsoroS0'
  );
  return (
    <div className="my-[116px]">
      <Container>
        <HeadingText style="text-center mb-12" heading="Payment" />
        <Elements stripe={stripePromise}>
          <CheckOutForm price={priceNum} />
        </Elements>
      </Container>
    </div>
  );
};

export default PaymentPage;
