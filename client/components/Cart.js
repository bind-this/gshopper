'use strict'

import React, { Component } from 'react'
import { Card, Label, Grid, Icon, Button } from 'semantic-ui-react'
import { connect } from "react-redux";
import Order from './Order'
import Steps from './Steps'

const fakeOrder = [
  {
    "id": 5,
    "quantity": 3,
    "purchasePrice": 499,
    "createdAt": "2017-11-04T21:09:32.121Z",
    "updatedAt": "2017-11-04T21:09:32.134Z",
    "orderId": 1,
    "productId": 32,
    "product": {
      "id": 32,
      "name": "Farming Simulator 18",
      "author": "GIANTS Software GmbH",
      "description": "Become a modern farmer in Farming Simulator 18! Immerse yourself in a huge open world and harvest many types of crops, take care of your livestock - cows, sheep, and pigs - take part in forestry, and sell your products on a dynamic market to expand your farm!\n\nYou have access to a huge selection of over 50 farming vehicles and machines, faithfully recreated from over 30 of the biggest names in the industry, including AGCO™’s most respected brands: Challenger, Fendt, Massey Ferguson and Valtra. Drive and use brand new equipment and harvest sugar beet, potatoes, wheat, canola, corn, and for the first time sunflowers.\n\nWith a deep and powerful simulation experience, a vast open world and a wide fleet of vehicles including brand new machines, Farming Simulator 18 invites you aboard the most complete handheld farming simulation ever created!\n\nFeatures of Farming Simulator 18 include:\n\n• Use realistic tractors and trucks from some of the biggest agriculture machine makers\n• Plant and harvest six different crops: Wheat, canola, corn, sugar beet, potatoes and sunflower\n• Breed pigs and sell them for profit\n• Feed your cows and sheep to produce and sell milk and wool\n• New front loader attachments expand your options when transporting bales or wood\n• Manage AI helpers for better results or let them drive your vehicles to a destination of your choice\n• New 3D graphics show even more detail on your machinery and the southern US environment\n• Harvest wood with dedicated machinery and sell the timber\n• Play with friends in local multiplayer mode via WiFi",
      "price": 499,
      "quantity": 119,
      "img": "http://is1.mzstatic.com/image/thumb/Purple128/v4/b3/1e/95/b31e9578-4a8e-dfa1-2f4f-0fef3a20966c/source/175x175bb.jpg",
      "altImages": [
        "http://is4.mzstatic.com/image/thumb/Purple117/v4/40/e2/73/40e27326-5360-8020-7bd8-7706ea415ef8/source/406x228bb.jpg",
        "http://is4.mzstatic.com/image/thumb/Purple19/v4/ea/a7/70/eaa770f6-45a2-b8bd-e908-4835385d497d/source/406x228bb.jpg",
        "http://is3.mzstatic.com/image/thumb/Purple127/v4/f5/d0/74/f5d07460-ad6b-ed95-b694-39977cc95709/source/406x228bb.jpg",
        "http://is2.mzstatic.com/image/thumb/Purple117/v4/96/be/e7/96bee7aa-fb7c-b197-3ad6-d97179ccd876/source/406x228bb.jpg",
        "http://is3.mzstatic.com/image/thumb/Purple117/v4/a7/b5/32/a7b5326f-84bc-41b5-5b7e-096b8e15ec94/source/406x228bb.jpg"
      ],
      "available": false,
      "createdAt": "2017-11-04T21:09:26.614Z",
      "updatedAt": "2017-11-04T21:09:26.614Z",
      "reviews": [
        {
          "id": 21,
          "rating": 5,
          "comment": "Perspiciatis sed placeat. A animi corporis officiis quod consequatur commodi in voluptatibus. Consequatur sint ad non expedita. Praesentium et eum accusantium.",
          "createdAt": "2017-11-04T21:09:27.233Z",
          "updatedAt": "2017-11-04T21:09:27.259Z",
          "userId": 200,
          "productId": 32,
          "user": {
            "id": 200,
            "firstName": "Joaquin",
            "lastName": "Nolan",
            "phone": "578.990.4609",
            "address": "8274 Leffler Ranch",
            "city": "Lukasmouth",
            "zip": "38020-7027",
            "img": "https://s3.amazonaws.com/uifaces/faces/twitter/mr_shiznit/128.jpg",
            "email": "JoaquinNolan@jessyca.com",
            "password": "E1jiJD5at8vPPwD",
            "salt": "JmxVcy3BP41o8cwqalW4jQ==",
            "googleId": null,
            "createdAt": "2017-11-04T21:09:26.482Z",
            "updatedAt": "2017-11-04T21:09:26.482Z"
          }
        },
        {
          "id": 195,
          "rating": 1,
          "comment": "Eos autem magnam voluptatum voluptas non. Odit facere labore a repellendus nihil ut temporibus nam earum. Numquam eos maxime vel et. Alias expedita eaque commodi odit eum voluptatem culpa. Reiciendis culpa aut excepturi.",
          "createdAt": "2017-11-04T21:09:31.896Z",
          "updatedAt": "2017-11-04T21:09:31.920Z",
          "userId": 165,
          "productId": 32,
          "user": {
            "id": 165,
            "firstName": "Christa",
            "lastName": "Crona",
            "phone": "1-000-326-5113 x95765",
            "address": "973 Lesch Row",
            "city": "Watersshire",
            "zip": "43012-7089",
            "img": "https://s3.amazonaws.com/uifaces/faces/twitter/nwdsha/128.jpg",
            "email": "ChristaCrona@berry.com",
            "password": "b79wvc2ufDha0Ys",
            "salt": "vSR7UqWfrW1MJjzCwiVb2g==",
            "googleId": null,
            "createdAt": "2017-11-04T21:09:26.482Z",
            "updatedAt": "2017-11-04T21:09:26.482Z"
          }
        }
      ],
      "categories": [
        {
          "id": 3,
          "name": "Games",
          "createdAt": "2017-11-04T21:09:26.595Z",
          "updatedAt": "2017-11-04T21:09:26.595Z",
          "product_categories": {
            "createdAt": "2017-11-04T21:09:58.522Z",
            "updatedAt": "2017-11-04T21:09:58.522Z",
            "productId": 32,
            "categoryId": 3
          }
        }
      ]
    }
  },
  {
    "id": 1,
    "quantity": 1,
    "purchasePrice": 0,
    "createdAt": "2017-11-04T21:09:32.055Z",
    "updatedAt": "2017-11-04T21:09:32.068Z",
    "orderId": 1,
    "productId": 15,
    "product": {
      "id": 15,
      "name": "Bowmasters - Multiplayer Game",
      "author": "Playgendary",
      "description": "A brand new version of the world-famous multiplayer game with bowmen  — a hotsy-totsy aim and shoot game Bowmasters has in store for you:\n\n• 60+ INSANE CHARACTERS from all dimensions absolutely for free! \n• ONLINE MULTIPLAYER!\n• 60+ DIFFERENT WEAPONS for total mayhem, awesome fatalities with rag-doll physics! \n• EPIC DUELS WITH YOUR FRIENDS. Grab your mates and and show them what you’re worth! \n• MULTIPLE GAME MODES. Shoоt birds or fruits down, defeat the enemies in duels and get money for that! \n• ENDLESS REWARDS FOR YOUR SKILLS!\n\nDon’t miss out on the fun! Be the first to grab it!!!",
      "price": 0,
      "quantity": 98,
      "img": "http://is4.mzstatic.com/image/thumb/Purple118/v4/db/0c/45/db0c452e-e7ce-4793-27ea-bb4a49d60503/source/175x175bb.jpg",
      "altImages": [
        "http://is4.mzstatic.com/image/thumb/Purple128/v4/f0/f2/88/f0f28882-f6ea-deeb-3be0-76ebd40a9fa8/source/406x228bb.jpg",
        "http://is1.mzstatic.com/image/thumb/Purple128/v4/95/83/77/9583775b-c04b-f39d-50df-b6e15ac5c190/source/406x228bb.jpg",
        "http://is3.mzstatic.com/image/thumb/Purple118/v4/7a/df/34/7adf3404-4d83-4f99-6594-58c10d0dee18/source/406x228bb.jpg",
        "http://is5.mzstatic.com/image/thumb/Purple128/v4/42/a3/0f/42a30f09-4700-b679-c91c-5406265351ca/source/406x228bb.jpg",
        "http://is3.mzstatic.com/image/thumb/Purple118/v4/26/9f/3a/269f3a41-6565-13e9-e995-1df0fc0fa9f6/source/406x228bb.jpg"
      ],
      "available": false,
      "createdAt": "2017-11-04T21:09:26.614Z",
      "updatedAt": "2017-11-04T21:09:26.614Z",
      "reviews": [],
      "categories": [
        {
          "id": 3,
          "name": "Games",
          "createdAt": "2017-11-04T21:09:26.595Z",
          "updatedAt": "2017-11-04T21:09:26.595Z",
          "product_categories": {
            "createdAt": "2017-11-04T21:09:58.522Z",
            "updatedAt": "2017-11-04T21:09:58.522Z",
            "productId": 15,
            "categoryId": 3
          }
        }
      ]
    }
  }
]

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const order = this.props.user.orders[0].order_products || fakeOrder
    // const order = fakeOrder
    return (
      <Grid centered columns={3}>
        <Grid.Column width={10}>
          <Steps />
          <h1><Icon name="shop" />Your Order <Label circular color="red">{order.length}</Label></h1>
          <Order order={order} />
          <Button attached='bottom' color="green" icon='dollar' content='Confirm order and pay' />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapState = state => {
  return {
    user: state.user
  };
};

export default connect(mapState)(Cart);
