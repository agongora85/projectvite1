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
        expect(wrapper.find('h2').text()).toContain(`Counter: ${value}`);
    })
})