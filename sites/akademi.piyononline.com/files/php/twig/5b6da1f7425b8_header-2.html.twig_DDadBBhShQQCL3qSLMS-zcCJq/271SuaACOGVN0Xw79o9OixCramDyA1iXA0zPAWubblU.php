<?php

/* sites/all/themes/gavias_unix/templates/page/header-2.html.twig */
class __TwigTemplate_590e89f00d78ab80c8747c2d267fc423a08f8c4e1657c65a531e964018171e32 extends Twig_Template
{
    public function __construct(Twig_Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = array(
        );
    }

    protected function doDisplay(array $context, array $blocks = array())
    {
        $tags = array("set" => 5, "if" => 6);
        $filters = array();
        $functions = array("path" => 16);

        try {
            $this->env->getExtension('Twig_Extension_Sandbox')->checkSecurity(
                array('set', 'if'),
                array(),
                array('path')
            );
        } catch (Twig_Sandbox_SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof Twig_Sandbox_SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof Twig_Sandbox_SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

        // line 1
        echo "<header id=\"header\" class=\"header-v2\">
  
  ";
        // line 4
        echo "
  ";
        // line 5
        $context["class_sticky"] = "";
        // line 6
        echo "  ";
        if ((($context["sticky_menu"] ?? null) == 1)) {
            // line 7
            echo "    ";
            $context["class_sticky"] = "gv-sticky-menu";
            // line 8
            echo "  ";
        }
        echo "  

   <div class=\"header-main ";
        // line 10
        echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["class_sticky"] ?? null), "html", null, true));
        echo "\">
      <div class=\"container header-content-layout\">
         <div class=\"header-main-inner p-relative\">
            <div class=\"row\">
              <div class=\"col-md-3 col-sm-6 col-xs-8 branding\">
                ";
        // line 15
        if (($context["setting_logo"] ?? null)) {
            // line 16
            echo "                  <a href=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->renderVar($this->env->getExtension('Drupal\Core\Template\TwigExtension')->getPath("<front>")));
            echo "\" class=\"site-branding-logo\"><img src=\"";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, ($context["theme_path"] ?? null), "html", null, true));
            echo "/images/logo-white.png\" alt=\"home\"/></a>
                ";
        } else {
            // line 17
            echo "  
                  ";
            // line 18
            if ($this->getAttribute(($context["page"] ?? null), "branding", array())) {
                // line 19
                echo "                    ";
                echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "branding", array()), "html", null, true));
                echo "
                  ";
            }
            // line 21
            echo "                ";
        }
        echo "  
              </div>

              <div class=\"col-md-9 col-sm-6 col-xs-4 p-static\">
                <div class=\"header-inner clearfix\">
                  <div class=\"main-menu\">
                    <div class=\"area-main-menu\">
                      <div class=\"area-inner\">
                        <div class=\"gva-offcanvas-mobile\">
                          <div class=\"close-offcanvas hidden\"><i class=\"fa fa-times\"></i></div>
                          ";
        // line 31
        if ($this->getAttribute(($context["page"] ?? null), "main_menu", array())) {
            // line 32
            echo "                            ";
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "main_menu", array()), "html", null, true));
            echo "
                          ";
        }
        // line 33
        echo "  

                          ";
        // line 35
        if ($this->getAttribute(($context["page"] ?? null), "offcanvas", array())) {
            // line 36
            echo "                            <div class=\"after-offcanvas hidden\">
                              ";
            // line 37
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "offcanvas", array()), "html", null, true));
            echo "
                            </div>
                         ";
        }
        // line 40
        echo "                        </div> 
                        <div id=\"menu-bar\" class=\"menu-bar hidden-lg hidden-md\">
                          <span class=\"one\"></span>
                          <span class=\"two\"></span>
                          <span class=\"three\"></span>
                        </div>
                        
                        ";
        // line 47
        if ($this->getAttribute(($context["page"] ?? null), "cart", array())) {
            // line 48
            echo "                          <div class=\"quick-cart\">
                            ";
            // line 49
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "cart", array()), "html", null, true));
            echo "
                          </div>
                        ";
        }
        // line 52
        echo "                        
                        ";
        // line 53
        if ($this->getAttribute(($context["page"] ?? null), "search", array())) {
            // line 54
            echo "                          <div class=\"gva-search-region search-region\">
                            <span class=\"icon\"><i class=\"fa fa-search\"></i></span>
                            <div class=\"search-content\">  
                              ";
            // line 57
            echo $this->env->getExtension('Twig_Extension_Sandbox')->ensureToStringAllowed($this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->getAttribute(($context["page"] ?? null), "search", array()), "html", null, true));
            echo "
                            </div>  
                          </div>
                        ";
        }
        // line 61
        echo "                      </div>
                    </div>
                  </div>  
                </div> 
              </div>

            </div>
         </div>
      </div>
   </div>

</header>
";
    }

    public function getTemplateName()
    {
        return "sites/all/themes/gavias_unix/templates/page/header-2.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  167 => 61,  160 => 57,  155 => 54,  153 => 53,  150 => 52,  144 => 49,  141 => 48,  139 => 47,  130 => 40,  124 => 37,  121 => 36,  119 => 35,  115 => 33,  109 => 32,  107 => 31,  93 => 21,  87 => 19,  85 => 18,  82 => 17,  74 => 16,  72 => 15,  64 => 10,  58 => 8,  55 => 7,  52 => 6,  50 => 5,  47 => 4,  43 => 1,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Twig_Source("", "sites/all/themes/gavias_unix/templates/page/header-2.html.twig", "/home/piyon/v8/sites/all/themes/gavias_unix/templates/page/header-2.html.twig");
    }
}
