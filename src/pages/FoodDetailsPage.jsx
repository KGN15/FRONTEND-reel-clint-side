import PageContainer from '../components/PageContainer';
import PrimaryButton from '../components/PrimaryButton';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const FoodDetailsPage = () => {
    const { id } = useParams();
  return (
    <PageContainer>
      <div className="flex-1">
        <div className="h-64 bg-gray-300 dark:bg-gray-600"></div>
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Food Item Name</h1>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xl font-semibold text-blue-600 dark:text-blue-400">$12.99</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-sm text-gray-600 dark:text-gray-400">4.5</span>
            </div>
          </div>

          <PrimaryButton>Add to Cart</PrimaryButton>

          {/* Dynamic Profile Link */}
          <Link to={`/food-partner/${id}`}>
            <PrimaryButton>View Food Partner Profile</PrimaryButton>
          </Link>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Description</h3>
            <p className="text-gray-700 dark:text-gray-300">
              This is a delicious food item with fresh ingredients. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default FoodDetailsPage;
