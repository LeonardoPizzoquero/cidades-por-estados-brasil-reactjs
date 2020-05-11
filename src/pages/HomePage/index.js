import React, { useState, useEffect, useCallback } from 'react';
import { ContainerFluid, Container, Form } from './styles';
import { states } from '../../services/states';
import api from '../../services/api';
import Select from '../../components/Select';

function HomePage() {
  const [cities, setCities] = useState([]);
  const [ufList, setUfList] = useState(states);
  const [ufCities, setUfCities] = useState([]);
  const [currentUf, setCurrentUf] = useState('');

  function handleChange(e) {
    const uf = e.target.value;
    const firstOption = e.target[0].value;

    if (currentUf !== uf && uf !== firstOption) {
      setCurrentUf(uf);

      const selectedState = ufCities.find((state) => {
        return uf === state.sigla;
      });

      const currentCities = selectedState.cidades.map((city) => {
        return {
          name: city,
          value: city,
        };
      });

      setCities(currentCities);
    } else {
      setCurrentUf('');
      setCities([]);
    }
  }

  const loadStates = useCallback(async () => {
    const response = await api.get('estados-cidades.json');

    setUfCities(response.data.estados);
  }, []);

  useEffect(() => {
    loadStates();
  }, [loadStates]);

  return (
    <ContainerFluid>
      <Container>
        <Form>
          <Select
            onChange={handleChange}
            label="Selecione o estado"
            firstOption="Estados"
            name="uf"
            id="uf"
            options={ufList}
          />

          <Select
            label="Verifique as cidades"
            firstOption={currentUf ? `Cidades de ${currentUf}` : 'Cidades'}
            name="city"
            id="city"
            options={cities}
          />
        </Form>
      </Container>
    </ContainerFluid>
  );
}

export default HomePage;
