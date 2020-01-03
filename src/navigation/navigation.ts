import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { CreateScreen, OverviewScreen } from '../screens';

export default createAppContainer(
    createStackNavigator({
        overview: OverviewScreen,
        create: CreateScreen
    })
);