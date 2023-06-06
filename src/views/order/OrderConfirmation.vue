<template>
    <layout>
        <template #content>
               <div class="container">
      <div class="breadcrumbs">
        パンくずリスト > <a href="">パンくずリスト</a>
      </div>
    </div>
      
    <main>


      <section class="orange_back">
        <div class="section_header">
          <h2 class="section_title">2022年9月6日（火）</h2>
        </div>
        <div class="container">

          <div class="order_frame border">
            <table>

              <tr>
                <th>注文者</th>
                <td>
                  秋山愛子
                </td>
              </tr>

              <tr>
                <th>引渡し先</th>
                <td>
                  東京都立第一中学校
                </td>
              </tr>

              <tr>
                <th>商品</th>
                <td>

                  <div class="item_result">
                    <dl>
                      <dt>
                        日替り弁当Ａ　780円×1個
                      </dt>
                      <dd>
                        ご飯の量：大盛り　＋80円<br>
                        ご飯の種類：味ご飯に変更　＋100円<br>
                        オプション：みそ汁＋季節のサラダ　＋200円
                      </dd>
                    </dl>
                  </div>
                                  
                </td>
              </tr>

              <tr>
                <th>合計</th>
                <td class="price">
                  1個　780円
                </td>
              </tr>

            </table>
          </div>


          <div class="order_frame border">
            <table>

              <tr>
                <th>注文者</th>
                <td>
                  秋山由香里
                </td>
              </tr>

              <tr>
                <th>引渡し先</th>
                <td>
                  東京都立第一中学校
                </td>
              </tr>

              <tr>
                <th>商品</th>
                <td>

                  <div class="item_result">
                    <dl>
                      <dt>
                        日替り弁当B　500円×1個
                      </dt>
                      <dd>
                        ご飯の量：普通盛り<br>
                        ご飯の種類：白ご飯<br>
                        オプション：なし
                      </dd>
                    </dl>
                  </div>
                </td>
              </tr>

              <tr>
                <th>合計</th>
                <td class="price">
                  1個　500円
                </td>
              </tr>

            </table>
          </div>


          <div class="order_frame">
            <table>
              <tr>
                <th>対象日の合計</th>
                <td class="price">
                  2個　1,280円
                </td>
              </tr>

            </table>
          </div>

          <div class="button">
            <div>
              <a href="javascript:history.back();" class="button02">
                戻る
              </a>
            </div>
          </div>

        </div>
      </section>

      <div class="calendar_info">
        <p>
          ご注文期限：当日９：００まで
        </p>
        <ul>
          <li>各種注釈をここにテキスト反映します。</li>
          <li>毎週〇曜日のメニューは日替りメニューとなります。詳しくはスタッフまでご確認ください。</li>
          <li>容器回収は、原則次回お届け日の回収となります。</li>
        </ul>
      </div>

    </main>
        </template>
    </layout>
</template>

<script setup>
import layout from '../layout/App.vue'
</script>