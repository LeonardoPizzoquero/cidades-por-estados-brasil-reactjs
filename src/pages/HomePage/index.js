import React, { useState, useEffect, useCallback } from 'react';
import { ContainerFluid, Container, Form } from './styles';

import api from '../../services/api';
import Select from '../../components/Select';

function HomePage() {
  const [cities, setCities] = useState([]);
  const [ufList, setUfList] = useState([]);
  const [currentCity, setCurrentCity] = useState('');
  const [currentUf, setCurrentUf] = useState('');

  useEffect(() => {
    api.get('api/v1/localidades/estados').then((response) => {
      const ufInitials = response.data.map((uf) => uf.sigla);

      setUfList(ufInitials);
    });
  }, []);

  useEffect(() => {
    if (currentUf === '0') {
      return;
    }

    api
      .get(`api/v1/localidades/estados/${currentUf}/municipios`)
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [currentUf]);

  const handleSelectUf = useCallback((event) => {
    setCurrentUf(event.target.value);
  }, []);

  const handleSelectCity = useCallback((event) => {
    setCurrentCity(event.target.value);
  }, []);

  return (
    <ContainerFluid>
      <Container>
        <Form>
          <Select
            onChange={handleSelectUf}
            value={currentUf}
            label="Selecione o estado"
            firstOption="Estados"
            name="uf"
            id="uf"
            options={ufList}
          />

          <Select
            onChange={handleSelectCity}
            value={currentCity}
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
