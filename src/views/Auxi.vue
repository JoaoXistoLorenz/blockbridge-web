<!-- <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldoc)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldoc ? 'disabled-links-card' : ''">
                    <div class="links-card-div">
                      <font-awesome-icon icon="file-lines" class="color-white"/>
                    </div>
                    <div>Documentação</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldoc)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldoc ? 'disabled-links-card' : ''">
                    <div class="links-card-div" style="background: #FFAD64">
                      <font-awesome-icon icon="blog" class="color-white"/>
                    </div>
                    <div>Blog</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldoc)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldoc ? 'disabled-links-card' : ''">
                    <div class="links-card-div" style="background: #5865F2">
                      <font-awesome-icon icon="cubes" class="color-white"/>
                    </div>
                    <div>Ecossistema</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlinsta)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlinsta ? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('insta.svg')"></el-image>
                    <div>Instagram</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltel)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltel ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('tel.svg')"></el-image>
                    <div>Telegram</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltel)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltel ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('linkedin.png')"></el-image>
                    <div>Linkedin</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltel)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltel ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('reddit.png')"></el-image>
                    <div>Reddit</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltel)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltel ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('medium.webp')"></el-image>
                    <div>Medium</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltwt)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltwt ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('twt.svg')"></el-image>
                    <div>Twitter</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldisc)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldisc ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('disc.svg')"></el-image>
                    <div>Discord</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlyoutube)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlyoutube? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('yt.png')"></el-image>
                    <div>YouTube</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltel)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltel ? 'disabled-links-card' : ''">
                    <el-image :src="imageUrl('coingecko.png')"></el-image>
                    <div>CoinGecko</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlcap)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlcap? 'disabled-links-card' : ''" >
                   <el-image :src="imageUrl('coinmarketcap.png')"></el-image>
                    <div>Coinmarketcap</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urltrading)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urltrading ? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('tradingview.png')"></el-image>
                    <div>Tradingview</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlbinance)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlbinance? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('binance.png')"></el-image>
                    <div>Binance</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlcoinbase)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlcoinbase? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('coinbase.svg')"></el-image>
                    <div>Coinbase</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlbinance)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlbinance? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('kucoin.png')"></el-image>
                    <div>Kucoin</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlbinance)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlbinance? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('bybit.png')"></el-image>
                    <div>Bybit</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlbinance)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlbinance? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('okx.png')"></el-image>
                    <div>OKX</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlexp)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlexp? 'disabled-links-card' : ''" >
                   <el-image :src="imageUrl('scam.png')"></el-image>
                    <div>Block Explorer</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlcert)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlcert ? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('certik.png')"></el-image>
                    <div>Certik</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldef)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldef? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('defi.png')"></el-image>
                    <div>DefiLlama</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlyoutube)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlyoutube? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('messari.png')"></el-image>
                    <div>Messari</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldef)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldef? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('dune.png')"></el-image>
                    <div>Dune Analytics</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urlyoutube)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urlyoutube? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('tokent.png')"></el-image>
                    <div>Token Terminal</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldef)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldef? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('dapr.png')"></el-image>
                    <div>Dappradar</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldef)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldef? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('l2.png')"></el-image>
                    <div>L2 Beat</div>
                  </el-card>
                </div>
              </el-col>
              <el-col :xs="24" :sm="12" :md="6" :lg="4" :xl="4">
                <div @click="navegarPara(model.urldef)">
                  <el-card :shadow="'never'" class="links-card" :class="!model.urldef? 'disabled-links-card' : ''">
                   <el-image :src="imageUrl('bubblemaps.png')"></el-image>
                    <div>Bubblemaps</div>
                  </el-card>
                </div>
              </el-col>-->