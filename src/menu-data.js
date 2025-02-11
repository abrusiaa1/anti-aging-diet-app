/* BREAKFAST FOODS */
import Oatmeal from './menu/oatmeal.jpg';
import Smoothie from './menu/smoothie.jpg';
import Vegetable_Salad from './menu/veggie-salad.jpg';
import AvocadoToast from './menu/tomato-avocado-toast.jpg';
import HardBoiledEggs from './menu/hard-boiled-eggs.jpg';
import YogurtParafait from './menu/yogurt-parfait.jpg';
import SmoothieBowl from './menu/smoothie-bowl.jpg';
import ChiaPudding from './menu/chia-pudding.jpg';
import VeggieOmelette from './menu/veggie-omlette.jpg';
import QuinoaBowl from './menu/quinoa-bowl.jpg';
import Nut_Banana_Toast from './menu/nut-banana-toast.jpg';
import Muesli from './menu/muesli.jpg';
import Pancakes from './menu/pancakes.jpg';
/* SECONDBREAKFAST FOODS */
import FruitNutMix from './menu/fruit-nut.jpg';
import Crackers from './menu/crackers.jpg';
import EggMuffins from './menu/egg-muffins.jpg';
import BerrieSmoothie from './menu/berrie-smoothie.jpg'
import RiceCakes from './menu/rice-cakes.jpg';
import MiniQuiches from './menu/mini-quiches.jpg';
import FruitSalad from './menu/fruit-salad.jpg';
import RisottaCheese from './menu/risotta-berries.jpg';
import GreenSmoothie from './menu/green-smoothie.jpg';
import Rolls from './menu/Rolls.jpg';
import CarrotsHummus from './menu/carrots-hummus.jpg';
import ChickpeaSalad from './menu/chickpea-salad.jpg';
import TurmericLatte from './menu/turmeric-latte.jpg';
import GingerLatte from './menu/ginger-latte.jpg';
/* LUNCH FOODS */ 
import LentilSoup from './menu/lentil-soup.jpg';
import StuffedBellPeppers from './menu/stuffed-bell-peppers.jpg';
import ChickpeaSalad2 from './menu/chickpea-salad-2.jpg';
import ZucchiniNoodles from './menu/zucchini-noodles.jpg';
import Wrap from './menu/salmon-spinach-wrap.jpg';
import RiceWithVeggies from './menu/rice-veggie.jpg';
import TunaAvocadoSalad from './menu/tuna-avocado-salad.jpg';
import MushroomKaleQuiche from './menu/mushroom-kale-quiche.jpg';
import CarrotSoup from './menu/carrot-ginger-soup.jpg';
import TomatoSoup from './menu/tomato-soup.jpg';
import LentilStew from './menu/lentil-sweet-potato.jpg';
import AvocadoTomatoSalad from './menu/avocado-tomato-salad.jpg';
import MediterraneanWrap from './menu/mediterranean-wrap.jpg';
import SobaNoodles from './menu/soba-noodles-salad.jpg';
import EggplantTomatoStew from './menu/eggplant-tomato-stew.jpg';
import BroccoliCauliflowerBowl from './menu/broccoli-cauliflower-bowl.jpg';
/* DINNER FOODS */
import SalmonAsparagus from './menu/salmon-asparagus.jpg';
import SalmonWithDill from './menu/salmon-dill.jpg';
import AcornSquash from './menu/acorn-squash.jpg';
import LentilSpinachCurry from './menu/lentil-spinach-curry.jpg';
import BellPepperParley from './menu/bell-pepper-parley.jpg';
import TofuVegeSkewers from './menu/tofu-vegies-skewers.jpg';
import TroutWithAlmonds from './menu/trout-almonds.jpg';
import CabageRolls from './menu/cabbage-rolls.jpg';
import SalmonAvocadoSushi from './menu/salmon-avocado-sushi.jpg';
import EggplantMisoSauce from './menu/eggplant-miso.jpg';
import SteamedFish from './menu/steamed-fish.jpg';
import SalmonWithCucumber from './menu/salmon-with-cucumber.jpg';


export const mealsData = {
    breakfast: [
      { name: "Oatmeal", img: Oatmeal, ageValue: 5 },
      { name: "Smoothie", img: Smoothie, ageValue: 6 },
      { name: "Vegetable Salad", img: Vegetable_Salad, ageValue: 8 },
      { name: "Tomato and Avocado Toast", img: AvocadoToast, ageValue: 4 },
      { name: "Hard Boiled Eggs", img: HardBoiledEggs, ageValue: 7 },
      { name: "Yogurt Parfait with berries", img: YogurtParafait, ageValue: 3 },
      { name: "Smoothie Bowl", img: SmoothieBowl, ageValue: 2},
      { name: "Chia Pudding", img: ChiaPudding, ageValue: 2},
      { name: "Veggie Omelette", img: VeggieOmelette, ageValue: 3},
      { name: "Quinoa Breakfast Bowl", img: QuinoaBowl, ageValue: 1},
      { name: "Nut Butter and Banana Toast", img: Nut_Banana_Toast, ageValue: 3},
      { name: "Home-Made Muesli", img: Muesli, ageValue: 4},
      { name: "Whole Grain Pancakes with Fruit", img: Pancakes, ageValue: 7}
    ],
    // SECONDBREAKFAST
    secondbreakfast: [
        { name: "Fruit and Nut Mix", img: FruitNutMix, ageValue: 2},
        { name: "Whole Grain Crackers with Hummus", img: Crackers, ageValue: 3},
        { name: "Egg Muffins", img: EggMuffins, ageValue: 6},
        { name: "Berrie Smoothie", img: BerrieSmoothie, ageValue: 3},
        { name: "Rice Cakes with Avocado", img: RiceCakes, ageValue: 5},
        { name: "Mini Quiches", img: MiniQuiches, ageValue: 6},
        { name: "Healthy Fruit Salad", img: FruitSalad, ageValue: 3},
        { name: "Berries with Ricotta Cheese", img: RisottaCheese, ageValue: 4},
        { name: "Green Smoothie", img: GreenSmoothie, ageValue: 1},
        { name: "Avocado and Cucumber Rolls", img: Rolls, ageValue: 3},
        { name: "Carrot and Hummus", img: CarrotsHummus, ageValue: 1},
        { name: "Chickpea Salad", img: ChickpeaSalad, ageValue: 1},
        { name: "Turmeric Latte", img: TurmericLatte, ageValue: 3},
        { name: "Ginger Latte", img: GingerLatte, ageValue: 3}
    ],
    // LUNCH
    lunch: [
        { name: "Lentil and Vegetable Soup", img: LentilSoup, ageValue: 3},
        { name: "Stuffed Bell Peppers", img: StuffedBellPeppers, ageValue: 3},
        { name: "Mediterranean Chickpea Salad", img: ChickpeaSalad2, ageValue: 3},
        { name: "Zucchini Noodles with Pesto", img: ZucchiniNoodles, ageValue: 3},
        { name: "Salmon and Spinach Wrap", img: Wrap, ageValue: 3},
        { name: "Brown Rice and Veggies", img: RiceWithVeggies, ageValue: 3},
        { name: "Tuna and Avocado Salad", img: TunaAvocadoSalad, ageValue: 3},
        { name: "Mushroom and Kale Quiche", img: MushroomKaleQuiche, ageValue: 3},
        { name: "Carrot and Ginger Soup", img: CarrotSoup, ageValue: 3},
        { name: "Fresh Tomato Soup with Basil", img: TomatoSoup, ageValue: 3},
        { name: "Lentil and Sweet Potato Stew", img: LentilStew, ageValue: 3},
        { name: "Avocado and Tomato Salad", img: AvocadoTomatoSalad, ageValue: 3},
        { name: "Mediterranean Hummus Wrap", img: MediterraneanWrap, ageValue: 3},
        { name: "Soba Noodle Salad", img: SobaNoodles, ageValue: 3},
        { name: "Eggplant and Tomato Stew", img: EggplantTomatoStew, ageValue: 3},
        { name: "Broccoli and Cauliflower Rice Bowl", img: BroccoliCauliflowerBowl, ageValue: 2}
    ],
    // DINNER
    dinner: [
        { name: "Poached Salmon with Asparagus", img: SalmonAsparagus, ageValue: 4},
        { name: "Steamed Salmon with Dill", img: SalmonWithDill, ageValue: 4},
        { name: "Stuffed Acorn Squash", img: AcornSquash, ageValue: 4},
        { name: "Lentil and Spinach Curry", img: LentilSpinachCurry, ageValue: 4},
        { name: "Stuffed Bell Peppers with Parley", img: BellPepperParley, ageValue: 4},
        { name: "Stir-Fried Tofu and Vegetable Skewers", img: TofuVegeSkewers, ageValue: 4},
        { name: "Baked Trout with Almonds", img: TroutWithAlmonds, ageValue: 4},
        { name: "Vegetable Stuffed Cabbage Rolls", img: CabageRolls, ageValue: 4},
        { name: "Salmon and Avocado Sushi Rolls", img: SalmonAvocadoSushi, ageValue: 4},
        { name: "Steamed Eggplant with Miso Sauce", img: EggplantMisoSauce, ageValue: 4},
        { name: "Steamed Fish with Ginger and Scallions", img: SteamedFish, ageValue: 4},
        { name: "Poached Salmon with Cucumber Dill Salad", img: SalmonWithCucumber, ageValue: 4},
    ]
  };