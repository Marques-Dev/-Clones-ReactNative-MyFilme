import React, {useState, useRef} from 'react';
import { View, ScrollView, Text, StyleSheet, Dimensions, ImageBackground, 
TextInput, TouchableOpacity, Image} from 'react-native';

import Carousel from 'react-native-snap-carousel'
import Icon from 'react-native-vector-icons/MaterialIcons';


const {width: screenWideth, height: screenHideth} = Dimensions.get('window');

export default function app() {
    const carouselRef = useRef(null);
    const [lista, setLista] = useState([
        {
            title:"Os Vingadores",
            text: "Após Thanos eliminar metade das criaturas vivas, os Vingadores têm de lidar com a perda de amigos e entes queridos. Com Tony Stark vagando perdido no espaço sem água e comida, Steve Rogers e Natasha Romanov lideram a resistência contra o titã louco.",
            relese: 2019,
            img: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Avengers_Endgame.jpg'
        },

        {
            title:"Titanic",
            text: "A bordo do luxuoso transatlântico, Rose, uma jovem da alta sociedade, se sente pressionada com a vida que leva. Ao conhecer Jack, um artista pobre e aventureiro, os dois se apaixonam. Mas eles terão que enfrentar um desafio ainda maior que o preconceito social com o destino trágico do navio.",
            relese: 2018,
            img: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg'
        },

        {
            title:"A Cidade de Deus",
            text: "Rio de Janeiro, anos 1970. Buscapé é um jovem negro e pobre que cresce na Cidade de Deus, a favela mais violenta da cidade.",
            relese: 2019,
            img: 'https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg'
        },

        {
            title:"Tropa de Elite 2",
            text: "O agora Subsecretário de Inteligência Nascimento já conseguiu desmontar o tráfico no Rio de Janeiro. Mas agora, atuando na política, ele terá que combater inimigos mais perigosos do que ele imaginava: as milícias e os políticos corruptos com interesses eleitoreiros que se aproveitam do sistema.",
            relese: 2019,
            img: 'https://upload.wikimedia.org/wikipedia/pt/e/ed/Tropa_de_Elite_2.jpg'
        }



    ]);

    const [background, setBackground] = useState(lista[0].img);
    const [activeIndex, setActiveIndex] = useState(0);

    const _renderItem = ({ item, index }) => {
      return(
        <View>
          <TouchableOpacity>
            <Image
            source={{uri: item.img}}
            style={styles.carouselImg}
            />
            <Text style={styles.carouselText}>{item.title}</Text>
            <Icon name="play-cicle-outline"
            size={30} 
            color="#FFF" 
            style={styles.carouselIcon}
            />
            
          </TouchableOpacity>
        </View>
      )
    };
 return (
   <ScrollView style={styles.container}>
     <View style={{flex:1, height: screenWideth}}>
          <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
            <ImageBackground
            source={{ uri: background }}
            style={styles.imgBg}
            blurRadius={3}
            >
              

              <View style={styles.viewSearch}>
                <TextInput
                  style={styles.input}
                  placeholder="Prucurando algo?"
                />
                <TouchableOpacity style={styles.Icon}>
                  <Icon name="search" color="#000" size={25}/> 
                </TouchableOpacity>
              </View>

              <Text
              style={{color: '#FFF', fontSize: 25,
              marginLeft: 10, marginVertical: 10, }}>
                Acabou de Chegar
              </Text>

              <View style={styles.slideview}>
                <Carousel
                style={styles.carousel}
                ref={carouselRef}
                data={lista}
                renderItem={_renderItem}
                sliderWidth={screenWideth}
                itemWidth={200}
                inactiveSlideOpacity={0.5}
                onSnapToItem={ (index) => {
                    setBackground(lista[index].img);
                    setActiveIndex(index);  
                }
                }
                />

              </View>

              <View style={styles.moreInfo}>
                <View style={{marginTop: 10}}>
                <Text style={styles.moveTitle}>{lista[activeIndex].title}</Text>
                <Text style={styles.moveDesc}>{lista[activeIndex].text}</Text>
                </View>
                <TouchableOpacity style={{marginRight: 15, marginTop: 10 }}
                onPress={() => alert('CLICOU')}
                >
                  <Icon nome="queue"
                   color="#131313" 
                   size={30} 
                   />
                </TouchableOpacity>
              </View>

            </ImageBackground>
          </View>
     </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  imgBg:{    
    flex:1,
    width: null,
    height: null,
    opacity: 1,
    justifyContent: "flex-start",
    backgroundColor: '#000'
  },
  viewSearch:{
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#FFF',
    elevation: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  input:{
    width: '90%',
    padding: 12,
    paddingLeft: 20,
    fontSize: 17,
  },
  icon:{
    position: 'absolute',
    right: 20,
    top: 15,
  },
  slideview:{
    width: '100%',
    height: 350,
    justifyContent: 'center',
    alignItems: 'center'
  },
  carousel:{
    flex:1,
    overflow: 'visible'
  },
  carouselImg:{
    alignSelf: 'center',
    width: 200,
    height: 300,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  carouselText:{
    padding: 15,
    color: '#FFF',
    position: 'absolute',
    bottom: 10,
    left: 2,
    fontWeight: 'bold'
  },
  carouselIcon:{
    position: 'absolute',
    top: 15,
    right: 15
  },
  moreInfo:{
    backgroundColor: '#FFF',
    width: screenWideth,
    height: screenHideth,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  moveTitle:{
    paddingLeft: 15,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#131313',
    marginBottom: 5,
  },
  moveDesc:{
    paddingLeft: 15,
    color: '#131313',
    fontSize: 14,
    fontWeight: 'bold'
  }
});