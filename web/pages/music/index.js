import React from 'react'
import MenuMusic from '../../component/menuMusic/menuMusic'
export default function Music () {
  return (
    <MenuMusic>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-music-album-cover-design-template-3324b2b5c69bb9a3cfaed14c71f24ca8_screen.jpg?ts=1572456482"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>

      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto ">
        <img
          className="rounded card-body-music"
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGRoYGBgXGBcdGBkYHR0XFx0aFxcdHSggHR0lHx0dIjEhJSkrLi4uGyAzODMtNygtLisBCgoKDg0OGxAQGi0lICUtLS0tLS4tLS0tLS0tLS0tLSstLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS8tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIGAwQFB//EAEIQAAEDAgMEBwUFBgUFAQAAAAEAAhEDIQQSMQVBUWEGEyJxgZHwMqGxwdEjQnLh8QcUM1JigiRDc5KzFYOywtJT/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAECAwQF/8QALhEAAgIBAwIDBwQDAAAAAAAAAAECEQMSITEEQVHR8AUTFGGBobEiI3HBMlKR/9oADAMBAAIRAxEAPwDyaVPNJnTuUIRuhVJHKRSLgNSPNI1ATcyTz3oDJKCUm8lJwi2/fw8DvQEQVItIN7d+vkkAfn8roI1+eqAGlNw5pZbTHrVLLaUAJhAj1rp9VKIg2PL6oAKJURu8FOq2LWtrB1Py1iORQClEqIO7Xz5aet6AgJB3q/r9Uhx/REpE7kAP5JBCYI4eCAQKJTg8EnO5IAJTJ4JOPJKbFAMKTdDbx9erLHnHEfRSzRv96AlKTlGUSgGhEpoAPJQeLHxUkqgkHuQFox2MxTsXUo0KjgA6AOyGsaIuTFmjjzjUgFbYr4yhDhWqlhIEvpmm5rrwHU3iQHQS0mxAI1DgOxsoAYrEF/8AD625aSHGoGOLWuLQSKYaHunUODS0Fwgx2kxowxFPJny4g5WhgpCnFAvzBj3U84ZkcwyAcwJGeM2d7lip7eeTiHOOpZQJ3STQpE+ZJ81z3Bb+3f4x/wBOh/wUVoEytFwVAhDRJ580ybcp4D4oA3jT1uQCCJjhf8k1nwuBfUnIBA1c4hrB/c4gTy1QlJvg123WRrCfZaTGsAnzgWW/TwbGGH/aO4NqtZTH95EvP4bc10KGwMRU/huA3hlN9o5AGfE67yquSXJpHFKXCK5IUjN9LACx7vfy7+FrXS2Q/qnPc+plYSKtszqZbr1tNwNhNyDpeCLrNitgOYxri2j1RImu1gfSIdEdbfNS19psNgz2d8LJF8Ms8EkrZTWgnmUlcOkHRsUC1r6OQWBfTc8hrokZy4umm6ZDxEaGSL17E7Ke24BMGHAiHtOsFndeQSCLg8LWjOUGjRARCPH1dGXfuUlAAlNromJHjuOo8lEJut37xGiASEWQEBEqy9Etk1c1PFhtKoxj39l7nABzGOfmqQxwawRmvd2WACq2QtuhtCsxoDKtRgacwa2o8AOP3gAdY3qGD0VvXhlEUaNCmC+o1n2pJd1vXFrZ6rKGsztdmtIpid0a2wcFicMKNGpRoFwqVHmXw80+re8tMUnEAOc8yDmmALAFUZu1sRp19Yg7utqRPEibmb+WqG7VxDdMRWEGR9pUF8uWddctu62irpJs18VVl7yPZLnECZEEz2SQDHOAVhATe8kkkySZJOpJuSTxSlXICUJ+A96EAFFQWOht9R68EORV9lxHA3B0kXF7xEj1cCz46ji6WNqVaVCuQXTalVLHtsdWi4sCCDIIBBBAKjtx+LrAUm4XFNpC5aaTyXOme0W02tygmwAH8xlxtmxODZVxOIzhxDakDLUpsNxvza7vLiTPNx+z2MpOdcPYWj+LSLcxDXEADtOs4acD40RJg29TIxDmuDgRToAgggtPUUB2hE8o4rnbvXr1zW/twfbn/Tof8FFaCuuCBJ3Hq0oldLo5gOvrtZkNSxdkG/KJvy9503oDFszZr6xJAim09t9gG8gXWLv6fOyxbRrBzuyMrG2Y3MHQO8EiTqVtbU6/rC/EUzIsGubDWD+VrdGgcFp1cUXEGAI0IsR3HchN9jGxp1iQL6W/RdHDUTHXUHOpvYQS2bsJIAex29hJAvcEgGZBOSnW6yk51usp3eP52ExnEbwSA78TXbnzrbMxwp1Glw7Ew4cabuy9vi0mOccAoJ2LDhulFalUp4gXJJp1ReCWwcrgbEQczT/K57Jhttza+KOCe2phz/h67DUpMIloaTFSkQdWtcbDhU5KuNaOrxbCc2QU3A7i5lUUsw721HLt4cCtsygH/wCXiXUmneKdWmRA5ZwHH8PJUaSLW3sWPB7RpOZh6cdhlRlNpi5w1dvWU6ev+U4sH/aHFdLa9PCVKmGa5rTSf19J5HtA02nq3g8W5Oyd0niqTs1rhQY/tQ0UnNjeWU+vPkYZ3wFu19nVW06NISeopZXOF/tKrmOfHENHW34HcqWr5L6Mmm6ZyukuxR1lV1MTUptcazA2waypVoGswg/e6tr3Njs9ZNxOWryecctL+vcvVtgVGVC/D14biKucsfpUa6qatYQ4cC2k4DdqvOdt4B1J8uYWSSHUzY06gALmcIGYEcjGrStIvsZM57XEX3e7hobKAF+HemShronn8FcqB0/XXjwScCBcR3qQdb8zz+qnTqG8F07iCQbmCLcZP5oSYiFKLajXx8vP0bhdvNzrNtdb8Uhpy9evHmhBEhMJEqTDpPruQESnKe+/uSmxQCjkhCSAkVF+h7ipEKL2yD3IC7vbmq4lvbINSoCGnDCxY0EzVIcNdRbTeFixlZ7KTnw8FoMx+5lubf2Wy4tzHW8a7ramJxf21SpSxOFyvdmioysXTaJBokcoBI+Kw18Q5zXMdiMFDrHKysDqDYihy+G6ypRJz9tH7Y/6dD/gorRK3NsVGurOLXBzctJuYTBLaVNhjMAYzNOoWmrrggiV3KlWphabaVMFlaq0GrUFnhrgHiix2rWgFrnkauOWYbfj0qOdzWD7xDR/cY+a6nSWuauKe8aOPYA3Mkhscz7R5uKhg1sQBHayg8mCfFwWk1pNgJ7rrYpYN735GAudwG7vPLedF2sZ/g2tYGtdWdfMYIaDazfvHmferFbo1tmbIquDajG8QQ6wLT2SBxBBIPBdbDdGmkNa65iPp5XKewQ4nO9znO5+RjlG62iuWzKTcubefhoufJPeoumen0uCMo6pK0c/CdFaDGuFyXtDXX3SHWm+oHkt/CbLpMpmmGy3OakG8Ovp5lbcxZJ9VrAXuMN3nvsLbzO5Ze81/wB+vkd6wwx9kQp0mtAaAA0QAALADT4LPhXQ4LhY/bbQ7I0nPvY2C9v4yZaw/wBMOPGFnoYUEZq0Fx3PMx4GwPcAuaeJ43cjTH1EM1xh/wB7EulOBwwzYujWpsxTGnK0VGg5v/1DbudUaBZo1LWhVHpDtA4jDNJpVevdVaXzTdAp021WM7UXJa9kuMSWngr/AEQBZsAHhp7lId66o5ao4pdAm3+r7HiVa3tW7xHxASBJ5/TVe74TElmpseMfEqr9OuizKmGfi6NMNqUu0/JlipS3uOUxnZrO9szMBbxyXycGfp3ifieYO7/y93eh3jPMfn4+rjRP6gKK0OckUCN9ted4sI+aQKCEAimpAxv5fJR7kAgUFMu+voohAOBz8h9UKMoQE8qiFIQkSgHyUUwLJIAlShJMjRASw9Ysex7RJY5rgObSHD3hdnb1IOqmph5dTDGxGrA7rD4QG3O4u5hcOV3+hUOxHUnSu11ITOUPIzU3OAImKjWCJuHEb1D8QLoniSx2gAm+4nTUk6DXcF0+mWD7TKhgDQk6T3ak8Aq+A6jXLTJIJBOWCSCQS0GLZhbz5K5bZo9ZhwSA4tEnjEXg6892iuuDOW0jBsOo3JAF99gOenfz37laWPaymHSA0ASSYA7yV55gsZ+70wYDnVILQR2WtPskgG5dqG2tckCJ08RtGpWfF6jz7EgP7W7LT9htidASNDxHHPG5yd8eJ6+HqY4saS3fgX7FdJcPBLCakalg7IPA1HQwea4fSTpC9lOnlGWrVbnaNTRpmQHf6j73+6Ji5k1HEQ+TUe8EBxbnl0Ngw0ANsSRE2Gll2v2giMXy6qnl7oPzlbxxxUtXc5M3VTyJQ7Gjsfrj2aLJeZObN2v7RI87m6ntTZWLpNDqsxr7YJHgTmVo2Hhm4XC9bUflziS4fdZqQ3mQIHMhdbZ/Q6pi6ZqfutCg14zNOIzvrvBFnOy3Z4uJ5KJS7l/dRjD9T3frwZ51sfbFWhUaWPgT2mn2SN8/XcvWmVA9oe0hwImQZBHIryHa2zH4ao6lUjM0kGDLTBiWu3g8bHWQFbP2b7QMVKB3dtvIEw4ecHxKrkgmrNeizOMtD+hrbdwGJxVZ8kNosdkbJMHuaLuK6Ow9kVsI7Nhq7w42FOqyKNUmPs3jMQ3NoCRqQJErU/6qaVWkyq59OmX1GvqNZnh5qPD8o3uAECx9omCrlt+jTZRZVwOIe57i05XnNSeyRn60OYcnZnSDOgWP7ipOki0nik3Sbk/XrY806abLpUMR9jLaVVoqsYR/Dlz2Ppkzqx7HCOEcL18q9/tbqCpiKFQNLWvw7XRaQ4vqZgeYJEneqLK64u0ec1ToFNtQ7vcNbR64yVFwSBUkAhSyz5SVFAJMlJNAKUJwhATeIJF/Hjv96gpSZQ0Cb8d3yQA1E8d3wTI9eaGmIMbwfC9o5/JARUiUkNQCK2tlvLatMgwS4ZTweCC0nfAflPgtZdjAdF8XUpdfSpOc32mwLkNN3SYAA4TmOoEXUMG10xIONNVvs18tZlxJbUa14/C3tZeeU6q2ZAzDw4SBTObmALqmbfxYd1OrXUmtp5C0iA1xLewYjsloPGBEAK4UKrXUWybOaG6zqI1+atDgzyFA2hiJgFou1r815l7GOI9qIEwBGgA0AjL/ANPqtw7cRpTc51MOzCQRkdpdw36AG2t749oUmhtP2usLW5tMsNHVADfmljp8FrsfLQ25E2lwDQTlnW27iqmr5JV6xcLhotFmNafZa2CRE6fE7yuz0wcXjCVT9/DMnvbM/ELi08RYjK0Axe/ZiJIJk31IvyAXc22wHZ+DfLXFjqlMlsx2gKgBtqAIPMFSij5TDZbTi6bcMQeycwINm7iSNDabc+av2w8LiKNM06mJqVmmRLqlT2f5QwkwPFcXoJg8uH6y0uPu/NWYVQGkkwACSToAL3KwlNa9LPZwYFoWR8nmfTXZfU1WuluV4OUCQRliZkmdeXcl0Fq5cW3+tr227g//ANfes+LxrMdjmiHGkGvDG3lxax7xbWXOAtwgKPQ9uTFgvygHMBDmGHnRpDSYOoupkmsTv5nJGUX1SceLR6DWwrMxzNBZWAfBuOtZDXgTYGBTf3lx3FSfSBygzA0kyddZM3UsbtKhRwzziH5aZfTykCX5gZIpjjkkE6AG61cJj5oMqPDoLQS4NNuBLBLgCL743rCnkS9cHpQlGEpQa4/D8jjftI2Z/hqVUD+C8sdAgdXUiCO57Y/vXnLhBN55jmvddtU2Vtk4pwyvHUPc1zSCDkHWNIIsYc2V4U12vdv+S6oPY8XIqkxBIlSPFRKuZkg717/FInRTpU803AMWnfcWUXxunQTPHf4IBBIlAQUApQnCEBlL/wAtxmGzN9OHylYwpZd9vd8EjqgYIafXrvQkgGNER4JyOc+rfDy52CgEOSs+067/AN1wj6dQtczKGlpggGmxkyLjt0ag72lVgjerB0VxQcRh6kFrntySJALi1pGumfq3dwqfzFCGdPaFaliCKGKAp122bVbGV43OnQHcWmxOkaA2HhnupVKL3dulUgcOAt4W5FV/bWNdU6p1wS1z+YLqj7eGX4q4bNeBUdUkFtWnSfI0LgC11v8AbwiVZGcuCq7bZkN26OqAXiC8MqggjgXutyXHqUi0kOBBAFjIN4I9xlWjpiztO/Cx/kXU3f8AmzyVZo0C72RvaOABcYEnddVNVukbtHFUzSr9bRNSq4M6urmLRSDTlJLQIdIht94XU2Ph+t2fiqU9um8Vw3eABldaOAPmuDUpPpucwkTJYYMgkRvFjBgg8YK3Ojm1Bh8Q2oRNMyyoI/y3WPfFj4Qi2Inb/ksvQHHANewmLTJO4X8LLV6SbYrYhj20KbzQacr3taTJ1gxoNPRWrh9jup4qthmu9pgDHcabn04cOPYnxBXXG161Cu7C4fDgspNOVmbKXWDs5P3iQZjes3COvV3O+GWTwqN0vl3Kds7B1arh1LXOcIu22U6gl2jY4yurW6L40vzFgJJkuDmAA6yYi/cFut27XrCqauKbhctN72MbT7VR4Ay0xJntTEzuKsVJuwmkOq4qrXOcz1hrOMZIiGiwzdoHWbaKrc79PyMawpd2/ovMwbABaajsS8P0DalWAIIGYMDr5cw1gTAVjpV2O9l7SOIcDbWbKvUtrbAotH2Lqzg6pJNJxc5rs4Gd1SJtli8g34rQwXR6hiqzsRTouoYaA2k0+06AG9ZykCd8uJPfVQ8fwdeLqW3phH7ncxlUYeltBrDFOthHPgHsiq53UhzdwL84mNcq8ocvT+npZQ2fSpNt11RrefVUQSB4OIXmUm8e5bR7nFnrWyKZMj13eO71oEG8+KRKsYk6DoN9OWo4Ec5hIKCyNcePI31FrcxpbkgIykme5JqAaEeCEAynPr3Izd3kE2gOcATG73cz9B3ICBWSbeHz4+vdaDygetd3r1uAkxknvQRuNo36ceXx/RDSZ3/Qz6+sJut9OUT+frRCRLLg6+R7XXsbxYwQWnKdxgmDxhYnWslKEF1wuyqWOzZHtYXFzxazamrw1s2a72jTJBBnKXtkjZwWyDQpPYa7KtMvaGEAtcyoTDg5pNhOW03kqm7L2g6i/M0kTE5TBsZBB4g8QRcgggkHf2tt+tV7PWAgwZFNrXSIjNDiDBANjFlKKOLZYdqYbPSaXatcWO/C8ZJ7gS139qqDa1VjX0WuOWoWhzQTDiCYEWm9vBejuLa9Fr47FZkuHAkEPbPIyFRNv4VzHnM7UgHXKCZc4i1g727by8XLSkkTjdqjUxtE0nvpvpGmWnKWl0ljgROeLG40iIJ1sVpyCOEARA17/ryTrOkm4NzcCAb6gQLHW4B5BbmxNnurVYaaQLWuqfauaGHIC7KQTeYgjgSoLHY2ZVNSnRpioz94p9rDkOvlBM4araxMEs1ta2+5bLxdLFMbWAAqN4jtMeLEHfFyPEry5rQMkk2IzR92Y9i8k2mQYu24XcbjX5nV6D/tmyazIvUa0lvWFotnygF4aSLhwPtRElZtgze7e62Z2+kjX4d+cMbVovnNTeJAO/IYOXwtvhadHH7KeAX0erO8Fj/dkkLqYXbtDFs6qp2Sd+4FLDdCaDZL5fJ0zEADwIXNPSlbv6HoqM5y/b0tfP1Zos21s2lenRzHcRSv4F8K1bHrPezPUGQuuGa5W7geZ1PfyWphujmFpkOZRbI0JLnEf7iV0+vZTDqlT2GNL3dzbx3nQcyFgpxU0o39TqjCcYOU6SXZLYov7SsfnxTKIu3D0w0/jf8AaVPKWt72lVIESJmN8RPh68llxOIdUqOqVDLnuc9xsbuOY7+fFYWid9/Q1leglSPAk23Y3D0NN/IevcOG719E53xpbTjx96Wa0bv1UlSPr5ozRyPKyRTndbvj4fS30AZcIAgDne6kGWgAk6+vBYipeXrvQClCfihAIqQUqjd/HRRQDy2lJpjTddN3l3+M+8R6tCOSAkXTebnXX3/FAJQmbWQAeaiTp8fdZEpC6AkDJk34/CShoJ8uSBulOYNvC9/cUBbuj20nGlkkWLSNwFQ2hx3Cr/MdKgM+0J3tp0G4ilLQcws5mj9fZg6Pabid8g2cVVdh1izEsMA5iabmuEhwqDIQ8EQ5pzTFxYcpum1aDGuZUpvLSWtILpJDSAQ2pqajBueJcI7UgZ0T7FJKnaKBi6Qa5waIFi0CSMtxMm/K+hkahRNDtBrSXZgAOyQS50DKATe5i2vcrPtPBNrSWiHi7ma/9ynHttdaQJnUXBzVnEPEw3sneQQWh2YmWEXyxl4myUXTT3HiWuBcHWLYaWkhruz2RLdTGW+sSE6FKqyarZYaRYcwIDml3skDU6+WtlrkEybneTvk8TxWxi6jnVC+oTUJjtSbgBsQ4idIQbG4ypQqODp/d6u+AXUXHi3LLmTvbDm9yvuw9pNFEdbWpQAS12dolosTBOgPxVB2ThH1qrGsaA7stZlbFwA01XCTdvtE6F0DfC9k2dg6OSrhm+y2h+6MG7R3WEHi57oP+mCsskldM6eneSFyjx6/GxS9odI6Ge2IaGD+RrnEniSBEcpVf6S9KjXZ1NMFtIkF5dGZ5FwI3NB7UbyBwVZY8lo844aTzQFEcEItPwJy9ZkyJxfDJE3tA7p/VJutvXvQSZMk347/ADTnU+uNlscoy4kcfUfL3KOqUpg2+HfZAAO7xj4+7XwTc2OXf9PckwxyPGTby3+u4IOhEHhGnhuQESPW9NnP3ap5U2OI0PL8kA57/JNRhNAE8UkI9a93qEAiPXHcgFMGPlrbmohASH6JSmPWiYQECkpHRBQDm0IA4X9w9fVRCyNcANATzm3hofVkAm1MrswGhkDdIvqrx0mOfCUyLgNIB3/ZvLZmbHsj1pw9jbDdU+0qAFrQCGmzY1mp/TwYIL/6W9o9na2MD8GXNnKHVG9oCdGuJcAIBLi7TwRFZFUw21qjIvmEzBnzBF2u5jXfKslH9zxkZjkqmJzODXk6SHxkf435BU1NGrVFls7L/S6AUzrWqQbxlaDad9+J5HwC0do7BwVAhvW5yTfPVaA0cwwBxJ4KpDEPAyh7svAOdHlMLPsrAOrVG0mgyTeNw1JUcLc6PeQe0YbnpGwKtMM/wrA3caoBgEWlpf2nuA0kQDfdB6WBq5MQANGtEeYKjhMM2mxrG6NEBQw4mu7k36LghLVks9p49OOmVfb3QtzqlZ+HMuFR5NMkCQ77RuQnflcBB4Kl4ii6m4se1zHjVrgQfEFe1vHaDuIDXeE5T4SQe8cE6hpvGWtTp1W8KjGuHk4GO8Lpll0VZ58ui1q48niAE9/ryCBI8F7Di+g+zq/stfQJ30nW/wBj8zR4Qqt0p/Z2cNSdXZi6TqTdRUBY/kBlDg9xJgaK8csZcHFPDOHKKMknuSC0MhwpkRHG88RxBHLWfpaKbe7z9W3oAJSCMu/dfePW8e9AKAcoRmQgFxTbx8k3CCfl60Ue5ABPr8kFARCAb3T8PJEygjghANzfG8DvSMbpCHkXiY3TEwux0WxlFlYMxFJlRj4bLhOQzY917+e5Ac/Z+BqVnZWNJPIEx3wCY5rv0OjopOBquAi59kv/ALWAloPNxMfyzpdNtYJzaRGH7MD+GwNAd+HS/evL8XtCo43JBBIO7wLd3d8ETTDjNJNqrOrtrawgMpnKG+zlJMyblxJkuO8uubytWji/8G9pMk1Tv3FrPz9acglA4IRRFNMNSQkAvTf2Y7JpdVUrE5qkDQ+y0zY8z9V59s/ZtSsewLb3H2R4q7dDNk1qYeHPhhIJaCYJHLebfBUmrVG+CMtaaRaHIo0Yc53ID4qWJrNY0udYBGHqFzQTvAPndc0MUYStvc9yU3JUkZVhepOKgTJWeeWrZF8Ua3ZIEgKo/tN2gSyjQneah7gMrZ8S6O4qwbd2kMPRdUImIDWzGZx0E/E8AV5XtDHPrvdUqGXu8gOAG4Cy36eFbnB1+ZadHdmq4pSmghdJ5BIetEy7dM/UxKi71ohpQDItMW+kT8R5pEcPG3ddClFue+yAj4IRZCAk8iLe9RTlDkBFT931Sy9yQegGLz5pEJgeuKfggIv1t696U6pkIdrfVAeidFukjarG0qrg2sOyJ+/wI58Qn0n6ONr/AGjYbU3kCzvxAfHX4LzohXXox0rsKWIdybVPuDzx/q37+J5p43F64HpYeohkj7rL9GVPGbPqUvbaQP5hdp7nafNao717BUwjXX0J3jQrUq7NeNII8j9PerQzqRE/Z7T2Z5XK6mw9ljEdYM2UtAI3kiSDA5W81b9odHxVu5hDv5o+PFcOnsirh6nWUzpof/pu9p0I+gV9VrYw+HcJJtWjv4emKbQxogNEfme9WDBew2LCL9+/3rn4aiytTD2WdvaTMO3gn4HxWvi9oPo03wMsAxI0J095WdN8s9GLUN6NbpHjesrU8IwyXuAf3G7vJs+as9R4A7vVlUuh+ynh7sTWBDnSGB3tX9p53idBylWfEU84gmBaY1I4LGcox2iaYFKSc5Lnj+Dm0atV5OUnXwW9QoZRme6TFydAN8E/FbFKmAIAgDcqf+0Hatm4ZjrntVAOH3Wnv18BxTHBzdk5cixQt7nI6Y7dbiHhlMk06Zsdznb3DkNB4neq48JIK7kqPCnNzk5MAYUoJ5oJ3bv1Sb696FCIU4UAFIWQDJRKRupBARzJoTQCdZIhTncoSgAFJAQQgH6700iUygAlHclyQ4oB3SDZPy1UnAjXeO+3FLLH0QG9gtqV6JinVc0D7ure7Kbe5XbYHSplWGVYZU0n7jzynQ8j4Lzzhw7k8h0PkfXmsp4oy+T8Tpw9TkxPbdeD4PZg9QqMa7UT4BeVYfbmIY3Kys8ADQkOHhmFh67sOI2nXeZfWqH+4geQssPh8n+x3P2jjr/Fnq9HDMY4lsifJZyZ/ReRYfaldns1qg/uJHkbJYnadap/EqvcOBcY8hZPh5t8/nzIXtHGltH8eR68L6ea5G2ukdHDdknPU/kaRI/Ed3x5LzJlctEAkTvaY8+Xl9MZEer+K0h06ju9zLJ7RlJVFV9yzY7priHAhmSnzaC4jxdb3Ks1KhcS5xJJMkm5J4kob64qI9cVuklwcM8kp7ydjJQPJJMegpKDbc+F4MW09fNBFlEKTigE5MhRAPBTa6xjkDMd9vL5d4EFNjuSgNVN7u7h6hAPKhY5QgJOKR9X8bBM67h61ULm2u4a+XvQDcUlMjhICOHzQCA1QiN6k7W/HvHfKAiE59XTGmsIMRpfv758UAgY79ykCMpuZkW3ReZEcY3/AJRA7tOSRb+W6fPcgHKk4Rbz+Ph4z9Iz6Kk0DfIIOkefBAMNGXcL24nv4Dy+iJ0tA8Y4fL1ugpGPr38h68NAJHpYyI9FAbYmRute6QCM2t+/QcPnu+iECKkweQ1105wke7TvU2ug23c/0sgMbdf0UfBSA+t0A8vAIBA+rpxpYe/1KQQUAQmHISKAGoITDfVvh6+svD4+t/uQEJsm5L181Jg4TPujuQB1juJ8yhRkIQWBUSkhAScpD15IQgAJHRNCA263s1fxM/8AZaJ3IQhaRkdu8VjCEIVJv+Q+SG6poQEHrKfYb+J3wppIQEAslTf+Fn/ixCEJEPaHgstL2x+L5oQgMTtT4qPBNCEA35qCEIBvUh7B72/ByEIAKm5JCAhU3d3zKdLXwPwKaEBsoQhDQ//Z"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="data:image/jpeg;base64,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"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTybMm_awsAxS-JHGSj0EdlSg4rUSlhEXckiw&usqp=CAU"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHB65egr5qC3knYUSw_1-Axu9pcOzIYuhtjQ&usqp=CAU"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdRkFFvfpkHk_KOO2VbPDYm_rzfGCSzyOu8w&usqp=CAU"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://townsquare.media/site/812/files/2017/06/Amine-Good-For-You.jpeg?w=980&q=75"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTcNksvNFnuxPFc0J571O1rLlHF83zBZ0a84Q&usqp=CAU"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://static.billboard.com/files/media/Janis-Joplin-Pearl-greatest-album-covers-billboard-1000x1000-compressed.jpg"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto  ">
        <img
          className="rounded card-body-music"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ2vUFCRZQrAj6rw_lJMGWMfN1EX-99CzN5XQ&usqp=CAU"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>

      <style jsx>
        {`
          .card-body-music {
            width: 200px;
            height: 200px;
            backgroundposition: center;
            backgroundrepeat: no-repeat;
            backgroundsize: cover;
          }

          @media (max-width: 500px) {
            .card-body-music {
              width: 145px;
              height: 145px;
            }
          }
        `}
      </style>
    </MenuMusic>
  )
}
