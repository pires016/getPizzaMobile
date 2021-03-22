import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';
import Info from '../components/Info';

test('renders correctly Info component', () => {
    const tree = renderer.create(<Info />).toJSON();
    expect(tree).toMatchSnapshot();
});

test('check value', () => {
    const value = "Raul";
    const tree = renderer.create(<Info valor={value} />);
    const instance = tree.root;
    expect(instance.findAllByType(Text)[0].props.children).toEqual(["Informações - ", value]);
});

test('check style - findAllByType', () => {
    const style = { color: "blue" };
    const tree = renderer.create(<Info styles={style} />);
    const instance = tree.root;
    expect(instance.findAllByType(Text)[0].props.style).toEqual(style);
});

test('check style - findByType', () => {
    const style = { color: "blue" };
    const tree = renderer.create(<Info styles={style} />);
    const instance = tree.root;
    expect(instance.findByType(Text).props.style).toEqual(style);
});
