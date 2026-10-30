import { describe, test, expect } from "vitest";
import { mount } from '@vue/test-utils'
import MyCounterScript from "@/components/MyCounterScript.vue";

describe('<MyCounterScript />', () => {
    test('should match snapshot', () => {
        const wrapper = mount(MyCounterScript, {
            props: {
                value: 5,
            }
        });
        // La siguiente línea es para ver en consola la estructura del html
        // Nos debe de mostrar el contenido que se deberá renderizar
        //  console.log(wrapper.html());
        // En la siguiente línea deberá de crear de forma automática la carpeta con el nombre de __snapshots_ dentro deberá de contener un archivo con el mismo nombre en donde se deberá de reflejar el mismo contenido obtenido en consola
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('renders the counter value correctly', () => {
        const value = 5;
        const wrapper = mount(MyCounterScript, {
            props: {
                value: value,
            }
        });
        // console.log(wrapper.find('h3').text());
        // console.log(wrapper.html());
        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        expect(wrapper.find('h3').text()).toContain(`Counter: ${value}`);
        expect(wrapper.find('[data-testid="square-label"]').text()).toContain(`Square: ${value * value}`);

        expect(counterLabel.text()).toContain(`Counter: ${value}`);
        expect(squareLabel.text()).toContain(`Square: ${value * value}`);
    });

    test('increments the counter when +1 button is clicked', async()  =>  {
        const value=6;
        const wrapper = mount(MyCounterScript, {
            props: {
                value: value,
            }
        });

        const [counterLabel, squareLabel] = wrapper.findAll('h3');
        const btnIncrement=wrapper.find('button');
        console.log(btnIncrement.html());
        await btnIncrement.trigger('click');

        expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
        expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);

    });

    test('decrements the counter when -1 button is clicked twice', async() =>  {
        const value=5;
        const wrapper=mount(MyCounterScript, {
            props: {
                value: value,
            },
        });
        const [counterLabel, squareLabel]=wrapper.findAll('h3');
        const [,btnIncrement] = wrapper.findAll('button');
        await btnIncrement.trigger('click');
        await btnIncrement.trigger('click');
        expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
        expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
    });
});