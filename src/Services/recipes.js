const categories = {
    cheeseBreads: 'Panes de Queso',
    crustBreads: 'Panes de Corteza',
    viennoiserie: 'Viennoiserie'

}

export const recipes = [
    {
        id: 'gared4-56sdt',
        name: 'Buñuelos',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7UlcxeCoaAi0jL4h_Cwr2jq1lsnN0sjOb3g&usqp=CAU',
        category: categories.amacijos,
        ingredients: [
            {
                name: 'Queso Costeño',
                weight: '1000 g',
            },
            {
                name: 'Almidón de Yuca',
                weight: '500 g',
            },
            {
                name: 'Fécula de Maiz',
                weight: '500 g',
            },
            {
                name: 'Azucar',
                weight: '125 g',
            },
            {
                name: 'Huevos',
                weight: '3-4 Und',
            },
            {
                name: 'Polvo para Hornear',
                weight: '5 g',
            },
            {
                name: 'Leche',
                weight: '100-200 mL',
            },
        ],
        preparation: ['Poner abundante aceite a 300ºC.', 'Mezclar todos los ingredientes hasta obtener una masa homogénea. (*Es necesario moler el queso costeño.)', 'Formar bolas de entre 40-100 gramos según el tamaño deseado.', 'Introducir los buñuelos en el aceite hasta que queden dorados.']
    },
    {
        id: 'gared4-565dt',
        name: 'Pan de Centeno',
        image: 'https://pecadoartesano.com/45-large_default/pan-espelta-100-integral.jpg',
        category: 'Panes de Corteza',
        ingredients: [
            {
                name: 'Harina de trigo',
                weight: '1200 g',
            },
            {
                name: 'Harina de Centeno',
                weight: '1300 g',
            },
            {
                name: 'Harina Integral',
                weight: '900 g',
            },
            {
                name: 'Masa Madre',
                weight: '900 g',
            },
            {
                name: 'Agua',
                weight: '3000 mL',
            },
            {
                name: 'Sal',
                weight: '80 g',
            },
            {
                name: 'Aceite de Oliva',
                weight: '80 g',
            },
        ],
        preparation: ['Mezclar todos los ingredientes.', 'Amasar durante 15 minutos ó hasta obtener el punto tela.', 'Cortar porciones de 700 g. y formar hogazas.', 'Dejar leudar durante 4 horas.', 'Hornear a 230ºC durante 35 minutos.']
    },
    {
        id: 'gawerd4-565dt',
        name: 'Baguettes',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJDm7sChziR8rup88KcCSSydHX3S9vct_jCg&usqp=CAU',
        category: categories.crustBreads,
        ingredients: [
            {
                name: 'Harina de trigo',
                weight: '6200 g',
            },
            {
                name: 'Masa Madre',
                weight: '600 g',
            },
            {
                name: 'Agua',
                weight: '4600 mL',
            },
            {
                name: 'Sal',
                weight: '180 g',
            },
            {
                name: 'Levadura',
                weight: '20 g',
            },
        ],
        preparation: ['Mezclar todos los ingredientes.', 'Amasar durante 15 minutos.', 'Cortar porciones de 350 g y formar las baguettes.', 'Dejar leudar durante 4 horas.', 'Refrigerar durante 12 a 24 horas.','Hornear a 250ºC durante 20 minutos.']
    },
    {
        id: 'gag4h54-565dt',
        name: 'Croissants',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8sTlwxpkRSBFaFsRga0L_tlpMfsgKISAHA&usqp=CAU',
        category: categories.viennoiserie,
        ingredients: [
            {
                name: 'Harina de trigo',
                weight: '1600 g',
            },
            {
                name: 'Azucar',
                weight: '250 g',
            },
            {
                name: 'Agua',
                weight: '700 mL',
            },
            {
                name: 'Sal',
                weight: '30 g',
            },
            {
                name: 'Levadura',
                weight: '40 g',
            },
            {
                name: 'Huevos',
                weight: '2 Unds',                
            },
            {
                name: 'Mantequilla',
                weight: '800 g',
            }
        ],
        preparation: ['Mezclar todos los ingredientes ECXEPTO LA MANTEQUILLA.', 'Amasar durante 15 minutos ó hasta conseguir el punto tela.', 'Enfriar la masa de 0 a 4 ºC','Empastar la masa con la mantequilla (dar 3 vueltas sencillas).', 'Enfriar nuevamente de 0 a 4 ºC.', 'Estirar la masa en una plancha rectangular de 0.5 cm de grosor.', 'Cortar triángulos de entre 80 y 100 gramos.', 'Armar los croissants.', 'Dejar leudar durante 1:30 horas a 30ºC con alta humedad.', 'Envolar con huevo batido.', 'Hornear a 160ºC durante 14 minutos.']
    },
    {
        id: 'asg3h54-565dt',
        name: 'Pandebono',
        image: 'https://as2.ftcdn.net/v2/jpg/04/74/79/35/1000_F_474793567_f33HpBc1Z7zFZqhW8A6slfaLUosF7j3x.jpg',
        category: categories.cheeseBreads,
        ingredients: [
            {
                name: 'Queso Campesino',
                weight: '1000 g',
            },
            {
                name: 'Queso Costeño',
                weight: '500 g',
            },
            {
                name: 'Almidón de Yuca',
                weight: '500 g',
            },
            {
                name: 'Sal',
                weight: '5 g*',
            },
            {
                name: 'Huevos',
                weight: '1 Unds',                
            },
            {
                name: 'Polvo para Hornear',
                weight: '3 g',
            }
        ],
        preparation: ['Mezclar todos los ingredientes hasta obtener una masa homogénea (*Si es necesario moler el queso costeño.)', 'Dejar reposar la masa de 20 a 30 minutos','Formar bolas ó roscas de 90 a 100 gramos','Hornear a 180ºC durante 14 minutos.']
    },
    {
        id: 'asg3h54-5t6dt',
        name: 'Almojábana',
        image: 'https://vecinavegetariana.com/wp-content/uploads/2021/09/20210906_151501_edited.jpeg',
        category: categories.cheeseBreads,
        ingredients: [
            {
                name: 'Queso Campesino',
                weight: '1000 g',
            },
            {
                name: 'Harina de Maiz',
                weight: '90 g',
            },
            {
                name: 'Harina de Trigo',
                weight: '70 g',
            },
            {
                name: 'Azucar',
                weight: '40 g',
            },
            {
                name: 'Sal',
                weight: '2 g',
            },
            {
                name: 'Polvo para Hornear',
                weight: '40 g',
            },
            {
                name: 'Leche en Polvo',
                weight: '30 g'
            }
        ],
        preparation: ['Dejar escurrir el suero del queso campesino.','Mezclar todos los ingredientes hasta obtener una masa homogénea.', 'Dejar reposar la masa de 20 a 30 minutos.','Formar bolas de 90 a 100 gramos.','Hornear a 160ºC durante 20 minutos.']
    },
    {
        id: 'asg3h54-5as5t',
        name: 'Pandeyuca',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXzCJRkq3_3vTBdRR-ZE_3mHRRyZ8YMZRzw&usqp=CAU',
        category: categories.cheeseBreads,
        ingredients: [
            {
                name: 'Queso Costeño',
                weight: '1000 g',
            },
            {
                name: 'Queso Campesino',
                weight: '800 g',
            },
            {
                name: 'Almidón Agrio',
                weight: '1000 g',
            },
            {
                name: 'Huevos',
                weight: '4 Unds',
            },
            {
                name: 'Mantequilla',
                weight: '50 g'
            },
            {
                name: 'Leche',
                weight: '100-400 mL',
            },
        ],
        preparation: ['Mezclar todos los ingredientes hasta obtener una masa homogénea.', 'Dejar reposar la masa de 1-2 horas en refrigeración.','Formar pandeyucas (Herraduras) de 90 a 100 gramos.','Hornear a 160ºC durante 20 minutos.']
    },
    {
        id: 'ah06h54-5as5t',
        name: 'Pan de Masa Madre',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa8L9hJCmOjIJnRZQflKdB9Bykfj_nMb0daA&usqp=CAU',
        category: categories.crustBreads,
        ingredients: [
            {
                name: 'Harina de Trigo',
                weight: '1320 g',
            },
            {
                name: 'Harina Integral',
                weight: '660 g',
            },
            {
                name: 'Aceite de Oliva',
                weight: '40 mL',
            },
            {
                name: 'Sal',
                weight: '40 g',
            },
            {
                name: 'Masa Madre',
                weight: '480 g'
            },
            {
                name: 'Agua',
                weight: '1620 mL',
            },
        ],
        preparation: ['Mezclar todos los ingredientes hasta obtener una masa homogénea.', 'Amasar hasta obtener punt tela.','Formar hogazas de 500 g a 1000 g según el tamaño deseado y poner en solera enharinada.','Dejar leudar de 3 a 4 horas a Tº ambiente.','Refrigerar de 12 a 18 horas a 2ºC.', 'Hornear durante 40 minutos a 230ºC con 10 segundos de vapor al inicio del horneo.']
    },
    {
        id: 'm1n33h54-5as5t',
        name: 'Masa Madre',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJbTbqA8HvvZNCZ4-iX6KFnVWW8WnztmI0fXih4UpBjs3Kd2ZkHBN9NNtOyI6tQ7pFIhk&usqp=CAU',
        category: categories.crustBreads,
        ingredients: [
            {
                name: 'Harina de Trigo',
                weight: '800 g',
            },
            {
                name: 'Agua',
                weight: '800 g',
            },
        ],
        preparation: ['Mezclar 500 g de harina y 500 mL de agua hasta obtener una masa homogénea.', 'Dejar reposar durante 48 horas a Tº ambiente.','Adicionar 150 g de harina y 150 mL de agua y mezclar.','Dejar reposar durante 24 horas a Tº ambiente.',' Refrigerar de 12 a 24 horas.','Adicionar nuevamente 150 g de harina y 150 mL de agua y mezclar.','Dejar reposar durante 4 horas a Tº ambiente.','Refigerar durante 12 a 24 horas.','Preparar una receta de pan de masa madre pero sin agregar la sal ni el aceite (sólo las harinas, el agua y la masa madre que se está preparando).', 'Dejar fermentar durante 4 horas y refrigerar.','Luego de este procedimiento la masa madre quedará lista. Al usarla, dejar siempre una porción y repetir los pasos 9 y 10 para no dejarla acabar.']
    },
    {
        id: 'm1nbbh54-5as5t',
        name: 'Pan Multicereal',
        image: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/12/super-seeded-oat-bread-2.jpg',
        category: categories.crustBreads,
        ingredients: [
            {
                name: 'Harina de Trigo',
                weight: '1000 g',
            },
            {
                name: 'Agua',
                weight: '1000 g',
            },
            {
                name: 'Levadura',
                weight: '30 g',
            },
            {
                name: 'Masa Madre',
                weight: '260 g',
            },
            {
                name: 'Sal',
                weight: '40 g',
            },
            {
                name: 'Avena en Hojuelas',
                weight: '270 g',
            },
            {
                name: 'Semillas de Girasol',
                weight: '130 g',
            },
            {
                name: 'Semillas de Linaza',
                weight: '130 g',
            },
            {
                name: 'Semillas de Calabaza',
                weight: '130 g',
            },
            {
                name: 'Ajonjolí',
                weight: '130 g',
            },
            {
                name: 'Uvas Pasas',
                weight: '260 g',
            }
        ],
        preparation: ['Remojar las semillas y la avena en hojuelas con la mitad del agua (500 mL)','Mezclar a parte la harina, la sal, la levadura, la masa madre y la otra mitad del agua (500 mL).','Amasar sin  las semillas ni las uvas pasas durante 10 minutos.','Adicionar las semillas.','Amasar otros 5 minutos.','Adicionar las uvas pasas hasta incorporarlas uniformemente.','Cortar porciones de entre 500g a 1000g según en tamaño deseado.','Formar hogazas alargadas.', 'Dejar leudar durante 3-4 horas.', 'Hornear a 230ºC durante 35 minutos.']
    },
    {
        id: 'm1nbbh54-0005t',
        name: 'Pan Brioche',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRplh2wIW03iIxigFmypQecKlCoXsfuN16FQw&usqp=CAU',
        category: categories.viennoiserie,
        ingredients: [
            {
                name: 'Harina de Trigo',
                weight: '1200 g',
            },
            {
                name: 'Levadura',
                weight: '35 g',
            },
            {
                name: 'Azucar',
                weight: '230 g',
            },
            {
                name: 'Sal',
                weight: '20 g',
            },
            {
                name: 'Huevos',
                weight: '800 g',
            },
            {
                name: 'Mantequilla',
                weight: '630 g',
            }
        ],
        preparation: ['Refrigerar la mantequilla y los huevos durante al menos 2 horas.','Mezclar todos los ingredientes ECXEPTO LA MANTEQUILLA.','Amasar durante 5 minutos.','Ir agregando la mantequilla en porciones de 50g a 100g poco a poco.','Deajr reposar la masa en refrigeración durante al menos 4 horas.','Porcionar según el tamaño deseado; ya sea bolitas de 50g a 100g ó porciones de 400g para trensas.','Dejar leudar hasta que doble su volumen.','Envolar con huevo batido.','Hornear según su tamaño. Bolitas a 160ºC durante 8 minutos ó Trensas a 140ºC durante 25 minutos.']
    },
    {
        id: 'zzz62f54-000thnert',
        name: 'Scones',
        image: 'https://lh3.googleusercontent.com/proxy/sYYzdR0WoAZrU61bZV4a2lGNYXwxrqjlfO3qxbTIt35aB0bMlbVDBQ9dM6vyNFnOXVoH0AwUhGw1ZvS268dc_1okWsUk_AblqdV96PZvDLIq8mz3vvXF3O_E2SfwYma8O_dShrcQL0tDzQ9kaDZxCgM',
        category: categories.viennoiserie,
        ingredients: [
            {
                name: 'Harina de Trigo',
                weight: '1000 g',
            },
            {
                name: 'Azucar',
                weight: '210 g',
            },
            {
                name: 'Mantequilla',
                weight: '170 g',
            },
            {
                name: 'Polvo para Hornear',
                weight: '30 g',
            },
            {
                name: 'Leche',
                weight: '700 g',
            },
            {
                name: 'Queso Crema',
                weight: '50 g',
            },
            {
                name: 'Mermelada',
                weight: '50 g',
            }
        ],
        preparation: ['Mezclar todos los ingredientes ECXEPTO LA LECHE.','Amasar hasta obener una mezcla arenosa, similar a la de la harina pero un poco mas gruesa.','Agregar la leche.','Mezclar SIN AMASAR solamente para incormporar la leche.','Porcionar según el tamaño deseado 100g a 150g.','Envolar con leche.','Hornear a 160ºC durante 14 minutos.', 'Servir con el queso crema y la mermelada.']
    }

]